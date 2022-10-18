import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isUUID } from 'class-validator';

@Injectable()
export class UuIdPipe implements PipeTransform {
  transform(value: string) {
    if (!isUUID(value)) {
      throw new BadRequestException({
        key: 'exceptions.BAD_REQUEST.INVALID_UUID',
        args: { value },
      });
    }
    return value;
  }
}
