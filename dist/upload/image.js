"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var googleapis_1 = require("googleapis");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
function uploadToDrive(image, drive) {
    return __awaiter(this, void 0, void 0, function () {
        var response, url, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, drive.files.create({
                            requestBody: {
                                name: image.name,
                                mimeType: image.mimetype
                            },
                            media: {
                                mimetype: image.mimetype,
                                body: fs_1.default.createReadStream(path_1.default.join(__dirname + "/publicimgs/" + image.name))
                            },
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, getUrl(response.data.id, drive)];
                case 2:
                    url = _a.sent();
                    return [2 /*return*/, { url: url, id: response.data.id }];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/, { error: error_1, url: null, id: null }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteFile(id, drive) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, drive.files.delete({
                            fileId: id
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, { success: "success", error: null }];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/, { success: null, error: error_2 }];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getUrl(id, drive) {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, drive.permissions.create({
                            fileId: id,
                            requestBody: {
                                role: 'reader',
                                type: 'anyone'
                            }
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, drive.files.get({
                            fileId: id,
                            fields: 'webContentLink'
                        })];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var uploadImage = function (file) { return __awaiter(void 0, void 0, void 0, function () {
    var dir, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN, oauth2Client, drive;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dir = __dirname + "/publicimgs/";
                if (!fs_1.default.existsSync(dir))
                    fs_1.default.mkdirSync(dir);
                return [4 /*yield*/, file.mv(dir + "/" + file.name, function (err) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (err)
                                return [2 /*return*/, console.log(err)];
                            return [2 /*return*/];
                        });
                    }); })];
            case 1:
                _a.sent();
                CLIENT_ID = process.env.CLIENT_ID;
                CLIENT_SECRET = process.env.CLIENT_SECRET;
                REDIRECT_URI = process.env.REDIRECT_URI;
                REFRESH_TOKEN = process.env.REFRESH_TOKEN;
                oauth2Client = new googleapis_1.google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
                oauth2Client.generateAuthUrl({
                    access_type: 'offline',
                });
                oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
                drive = googleapis_1.google.drive({
                    version: 'v3',
                    auth: oauth2Client
                });
                return [4 /*yield*/, uploadToDrive(file, drive)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.default = uploadImage;
