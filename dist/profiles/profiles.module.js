"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilesModule = void 0;
const common_1 = require("@nestjs/common");
const profiles_controller_1 = require("./profiles.controller");
const prisma_service_1 = require("../database/prisma.service");
const profiles_repository_1 = require("./repository/profiles.repository");
const profiles_repository_implements_1 = require("./repository/profiles.repository.implements");
let ProfilesModule = class ProfilesModule {
};
exports.ProfilesModule = ProfilesModule;
exports.ProfilesModule = ProfilesModule = __decorate([
    (0, common_1.Module)({
        controllers: [profiles_controller_1.ProfilesController],
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: profiles_repository_1.ProfilesRepository,
                useClass: profiles_repository_implements_1.ProfilesRepositoryImplements
            }
        ],
    })
], ProfilesModule);
//# sourceMappingURL=profiles.module.js.map