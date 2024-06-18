// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.180.0
//   protoc               v3.20.3
// source: proto/merchandise/merchandise.proto

/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "merchandise";

export interface MerchandiseEntity {
  id: number;
  name: string;
  type: string;
  price: string;
  images: string;
  sale: number;
  shop: ShopEntity | undefined;
}

export interface ShopEntity {
  id: number;
  name: string;
  type: string;
  avatarUrl: string;
}

export interface GetMerchandisesReq {
  page: number;
  limit: number;
}

export interface GetMerchandisesRes {
  total: number;
  data: MerchandiseEntity[];
}

export interface GetMerchandiseReq {
  id: number;
}

export interface GetMerchandiseRes {
  data: MerchandiseEntity | undefined;
}

export const MERCHANDISE_PACKAGE_NAME = "merchandise";

export interface MerchandiseGrpcClient {
  getMerchandises(request: GetMerchandisesReq, metadata?: Metadata): Observable<GetMerchandisesRes>;

  getGetMerchandise(request: GetMerchandiseReq, metadata?: Metadata): Observable<GetMerchandiseRes>;
}

export interface MerchandiseGrpcController {
  getMerchandises(
    request: GetMerchandisesReq,
    metadata?: Metadata,
  ): Promise<GetMerchandisesRes> | Observable<GetMerchandisesRes> | GetMerchandisesRes;

  getGetMerchandise(
    request: GetMerchandiseReq,
    metadata?: Metadata,
  ): Promise<GetMerchandiseRes> | Observable<GetMerchandiseRes> | GetMerchandiseRes;
}

export function MerchandiseGrpcControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getMerchandises", "getGetMerchandise"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("MerchandiseGrpc", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("MerchandiseGrpc", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const MERCHANDISE_GRPC_SERVICE_NAME = "MerchandiseGrpc";
