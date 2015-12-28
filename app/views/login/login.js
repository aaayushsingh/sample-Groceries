var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var application_1 = require("nativescript-angular/application");
var core_1 = require("angular2/core");
var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");
var user_view_model_1 = require("../../shared/view-models/user-view-model");
var LoginPage = (function () {
    function LoginPage() {
        this.user = new user_view_model_1.UserViewModel({
            email: "nativescriptrocks@telerik.com",
            password: "password"
        });
    }
    LoginPage.prototype.signIn = function () {
        this.user.login()
            .catch(function (error) {
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
        })
            .then(function () {
            frameModule.topmost().navigate("views/list/list");
        });
    };
    LoginPage.prototype.register = function () {
        frameModule.topmost().navigate("views/register/register");
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "views/login/login.html"
        })
    ], LoginPage);
    return LoginPage;
})();
function loaded(args) {
    var page = args.object;
    if (page.ios) {
        var navigationBar = frameModule.topmost().ios.controller.navigationBar;
        navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
    }
    application_1.nativeScriptBootstrap(LoginPage, []);
}
exports.loaded = loaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6WyJMb2dpblBhZ2UiLCJMb2dpblBhZ2UuY29uc3RydWN0b3IiLCJMb2dpblBhZ2Uuc2lnbkluIiwiTG9naW5QYWdlLnJlZ2lzdGVyIiwibG9hZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0QkFBb0Msa0NBQWtDLENBQUMsQ0FBQTtBQUN2RSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsSUFBWSxhQUFhLFdBQU0sWUFBWSxDQUFDLENBQUE7QUFDNUMsSUFBWSxXQUFXLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFeEMsZ0NBQTRCLDBDQUEwQyxDQUFDLENBQUE7QUFFdkU7SUFLSUE7UUFDSUMsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsK0JBQWFBLENBQUNBO1lBQzFCQSxLQUFLQSxFQUFFQSwrQkFBK0JBO1lBQ3RDQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUN2QkEsQ0FBQ0EsQ0FBQ0E7SUFDUEEsQ0FBQ0E7SUFDREQsMEJBQU1BLEdBQU5BO1FBQ0lFLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLEVBQUVBO2FBQ1pBLEtBQUtBLENBQUNBLFVBQVNBLEtBQUtBO1lBQ2pCLGFBQWEsQ0FBQyxLQUFLLENBQUM7Z0JBQ2hCLE9BQU8sRUFBRSwrQ0FBK0M7Z0JBQ3hELFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQ0E7YUFDREEsSUFBSUEsQ0FBQ0E7WUFDRixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDQSxDQUFDQTtJQUNYQSxDQUFDQTtJQUNERiw0QkFBUUEsR0FBUkE7UUFDSUcsV0FBV0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EseUJBQXlCQSxDQUFDQSxDQUFDQTtJQUM5REEsQ0FBQ0E7SUF6QkxIO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNQQSxRQUFRQSxFQUFFQSxPQUFPQTtZQUNqQkEsV0FBV0EsRUFBRUEsd0JBQXdCQTtTQUN4Q0EsQ0FBQ0E7a0JBdUJEQTtJQUFEQSxnQkFBQ0E7QUFBREEsQ0FBQ0EsQUExQkQsSUEwQkM7QUFFRCxnQkFBdUIsSUFBZ0M7SUFDbkRJLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0lBQ3ZCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNYQSxJQUFJQSxhQUFhQSxHQUFHQSxXQUFXQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxhQUFhQSxDQUFDQTtRQUN2RUEsYUFBYUEsQ0FBQ0EsUUFBUUEsR0FBR0EsVUFBVUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7SUFDeERBLENBQUNBO0lBQ0RBLG1DQUFxQkEsQ0FBQ0EsU0FBU0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7QUFDekNBLENBQUNBO0FBUGUsY0FBTSxTQU9yQixDQUFBIn0=