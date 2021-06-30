"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const mensajes_controller_1 = require("./mensajes.controller");
describe('MensajesController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [mensajes_controller_1.MensajesController],
        }).compile();
        controller = module.get(mensajes_controller_1.MensajesController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=mensajes.controller.spec.js.map