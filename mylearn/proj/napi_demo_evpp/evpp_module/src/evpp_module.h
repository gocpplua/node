#pragma once

#include <napi.h>

class EvppModule : public Napi::ObjectWrap<EvppModule>
{
public:
    EvppModule(const Napi::CallbackInfo&);
    Napi::Value Greet(const Napi::CallbackInfo&);

    static Napi::Function GetClass(Napi::Env);

private:
    std::string _greeterName;
};
