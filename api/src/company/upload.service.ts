import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { ConfigService } from '@nestjs/config'; 
import axios from 'axios';

@Injectable()
export class S3Service {
  private readonly s3: S3;
  private readonly bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new S3({
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get<string>('AWS_REGION'),
    });
    this.bucketName = this.configService.get<string>('AWS_BUCKET_NAME');
  }

  async uploadFile(file: Express.Multer.File) {
    const key = `profile/${file.originalname}`;
    
    try {
      await this.s3
        .putObject({
          Bucket: this.bucketName,
          Key: key,
          Body: file.buffer,
          ContentType: file.mimetype,
        })
        .promise();

      return key;
    } catch (error) {
      throw new InternalServerErrorException('Error uploading file to S3');
    }
  }

  async uploadFileByUrl(url: string, key: string): Promise<String> {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');    
    try {
      await this.s3
        .putObject({
          Bucket: this.bucketName,
          Key: key,
          Body: buffer,
          ContentType: response.headers['content-type'],
        })
        .promise();

      return key;
    } catch (error) {
      throw new InternalServerErrorException('Error uploading file to S3');
    }
  }
  getFileupload(key: string): string {
    return `https://${this.bucketName}.s3.amazonaws.com/${key}`;
  }


  getFileUrl(key): string {
    return `https://${this.bucketName}.s3.amazonaws.com/${key}`;
  }

  async deleteFile(key: string): Promise<void> {
    try {
      await this.s3
        .deleteObject({
          Bucket: this.bucketName,
          Key: key,
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException('Error deleting file from S3');
    }
  }
}
