"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservacionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReservacionController = class ReservacionController {
    constructor(reservacionRepository) {
        this.reservacionRepository = reservacionRepository;
    }
    async create(reservacion) {
        return this.reservacionRepository.create(reservacion);
    }
    async count(where) {
        return this.reservacionRepository.count(where);
    }
    async find(filter) {
        return this.reservacionRepository.find(filter);
    }
    async updateAll(reservacion, where) {
        return this.reservacionRepository.updateAll(reservacion, where);
    }
    async findById(id, filter) {
        return this.reservacionRepository.findById(id, filter);
    }
    async updateById(id, reservacion) {
        await this.reservacionRepository.updateById(id, reservacion);
    }
    async replaceById(id, reservacion) {
        await this.reservacionRepository.replaceById(id, reservacion);
    }
    async deleteById(id) {
        await this.reservacionRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/reservaciones', {
        responses: {
            '200': {
                description: 'Reservacion model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Reservacion) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reservacion, {
                    title: 'NewReservacion',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservacionController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/reservaciones/count', {
        responses: {
            '200': {
                description: 'Reservacion model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Reservacion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservacionController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/reservaciones', {
        responses: {
            '200': {
                description: 'Array of Reservacion model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Reservacion, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Reservacion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservacionController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/reservaciones', {
        responses: {
            '200': {
                description: 'Reservacion PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reservacion, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Reservacion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Reservacion, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservacionController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/reservaciones/{id}', {
        responses: {
            '200': {
                description: 'Reservacion model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Reservacion, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Reservacion, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservacionController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/reservaciones/{id}', {
        responses: {
            '204': {
                description: 'Reservacion PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Reservacion, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Reservacion]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservacionController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/reservaciones/{id}', {
        responses: {
            '204': {
                description: 'Reservacion PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Reservacion]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservacionController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/reservaciones/{id}', {
        responses: {
            '204': {
                description: 'Reservacion DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ReservacionController.prototype, "deleteById", null);
ReservacionController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ReservacionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ReservacionRepository])
], ReservacionController);
exports.ReservacionController = ReservacionController;
//# sourceMappingURL=reservacion.controller.js.map