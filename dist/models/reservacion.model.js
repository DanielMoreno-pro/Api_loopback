"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservacion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Reservacion = class Reservacion extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Reservacion.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Reservacion.prototype, "fecha", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Reservacion.prototype, "evento", void 0);
Reservacion = tslib_1.__decorate([
    repository_1.model({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Reservacion);
exports.Reservacion = Reservacion;
//# sourceMappingURL=reservacion.model.js.map