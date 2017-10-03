using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MsSQLAdmin.Services;
using Microsoft.AspNetCore.Http;

namespace MsSQLAdmin {
    public class Startup {
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            services.AddMvc();

            services.AddResponseCaching(options => {
                options.UseCaseSensitivePaths = true;
                options.MaximumBodySize = 1024;
            });

            // You need to register IHttpContextAccessor.
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            // Adds a default in-memory implementation of IDistributedCache.
            services.AddDistributedMemoryCache();

            services.AddSession(options => {
                options.Cookie.Name = ".MsSQLAdmin.Session";
                // Set a short timeout for easy testing.
                options.IdleTimeout = TimeSpan.FromHours(1);
                options.Cookie.HttpOnly = true;
            });

            services.AddScoped<DatabaseService>();
            services.AddScoped<ConnectionService>();            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            } else {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseResponseCaching();

            app.UseSession();
            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "database",
                    template: "Server/{serveur}/{database?}/{table?}",
                    defaults: new { controller = "Database", action = "Index", area = string.Empty });
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}