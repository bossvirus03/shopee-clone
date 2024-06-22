import { HttpStatus } from '@nestjs/common';
export class CustomServiceError extends Error {
  status: HttpStatus;

  constructor(message: string, status: HttpStatus) {
    super(message);
    this.status = status;
  }
}

export class InternalServerCustomError extends CustomServiceError {
  constructor() {
    super('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
