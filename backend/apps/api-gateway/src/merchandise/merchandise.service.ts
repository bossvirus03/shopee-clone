import { Injectable } from '@nestjs/common';

@Injectable()
export class MerchandiseService {
  create(createMerchandiseDto) {
    return 'This action adds a new merchandise';
  }

  findAll() {
    return `This action returns all merchandise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchandise`;
  }

  update(id: number, updateMerchandiseDto) {
    return `This action updates a #${id} merchandise`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchandise`;
  }
}
