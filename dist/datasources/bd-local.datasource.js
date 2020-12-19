"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BdLocalDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'BDLocal',
    connector: 'memory',
    localStorage: 'BDLocal',
    file: 'BDLocal'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let BdLocalDataSource = class BdLocalDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
BdLocalDataSource.dataSourceName = 'BDLocal';
BdLocalDataSource.defaultConfig = config;
BdLocalDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.BDLocal', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], BdLocalDataSource);
exports.BdLocalDataSource = BdLocalDataSource;
//# sourceMappingURL=bd-local.datasource.js.map