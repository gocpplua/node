#include "evpp_module.h"
#include <evpp/event_loop.h>
using namespace Napi;

void Print(){
    evpp::EventLoop loop;
    std::cout << "evpp" << std::endl;
}

EvppModule::EvppModule(const Napi::CallbackInfo& info) : ObjectWrap(info) {
    Napi::Env env = info.Env();

    if (info.Length() < 1) {
        Napi::TypeError::New(env, "Wrong number of arguments")
          .ThrowAsJavaScriptException();
        return;
    }

    if (!info[0].IsString()) {
        Napi::TypeError::New(env, "You need to name yourself")
          .ThrowAsJavaScriptException();
        return;
    }

    this->_greeterName = info[0].As<Napi::String>().Utf8Value();
}

Napi::Value EvppModule::Greet(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();

    if (info.Length() < 1) {
        Napi::TypeError::New(env, "Wrong number of arguments")
          .ThrowAsJavaScriptException();
        return env.Null();
    }

    if (!info[0].IsString()) {
        Napi::TypeError::New(env, "You need to introduce yourself to greet")
          .ThrowAsJavaScriptException();
        return env.Null();
    }

    Napi::String name = info[0].As<Napi::String>();

    printf("Hello %s\n", name.Utf8Value().c_str());
    printf("I am %s\n", this->_greeterName.c_str());
    Print();
    return Napi::String::New(env, this->_greeterName);
}

Napi::Function EvppModule::GetClass(Napi::Env env) {
    return DefineClass(env, "EvppModule", {
        EvppModule::InstanceMethod("greet", &EvppModule::Greet),
    });
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    Napi::String name = Napi::String::New(env, "EvppModule");
    exports.Set(name, EvppModule::GetClass(env));
    return exports;
}

NODE_API_MODULE(addon, Init)
