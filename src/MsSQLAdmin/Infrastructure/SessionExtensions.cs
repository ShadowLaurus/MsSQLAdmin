using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace MsSQLAdmin.Infrastructure {
    public static class SessionExtensions {
        public static void Set<T>(this ISession session, string key, T value) {
            if (value == null)
                session.Remove(key);
            else if (value is string)
                session.SetString(key, value.ToString());
            else
                session.SetString(key, JsonConvert.SerializeObject(value));
        }

        public static T Get<T>(this ISession session, string key) {
            var value = session.GetString(key);
            return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
        }
    }
}