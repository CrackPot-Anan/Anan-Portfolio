globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { a as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs").then((n) => n.a)) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-DUB2DA21.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1064-IzPPIj9AvRmGafdo2NV5ZRPy+a4\"",
		"mtime": "2026-10-21T22:31:34.938Z",
		"size": 4196,
		"path": "../public/assets/about-DUB2DA21.js"
	},
	"/assets/admin-xPtZGAiQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae91-H42mbQ/ptUjZDtj5mWFMcu78EJU\"",
		"mtime": "2026-10-21T22:31:34.939Z",
		"size": 44689,
		"path": "../public/assets/admin-xPtZGAiQ.js"
	},
	"/assets/arrow-left-DzGfoyya.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-gL+Q/DD23Yv+AwCwHEKwKkyt7dY\"",
		"mtime": "2026-10-21T22:31:34.939Z",
		"size": 165,
		"path": "../public/assets/arrow-left-DzGfoyya.js"
	},
	"/assets/arrow-up-right-5P3aWL8N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-ifEAhKljunYB0c+YjDlu+euHIP8\"",
		"mtime": "2026-10-21T22:31:34.939Z",
		"size": 167,
		"path": "../public/assets/arrow-up-right-5P3aWL8N.js"
	},
	"/assets/Abrar Anan Raiyan-BXmaAZYN.pdf": {
		"type": "application/pdf",
		"etag": "\"118dc-YRqauL0Hdf/EPTxH3jFUhZZcKe0\"",
		"mtime": "2026-10-21T22:31:35.052Z",
		"size": 71900,
		"path": "../public/assets/Abrar Anan Raiyan-BXmaAZYN.pdf"
	},
	"/assets/auth-CCn13Eb9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"175-Y79b1y8tjl8ZEtZZ3jRJ8cbH7Kc\"",
		"mtime": "2026-10-21T22:31:34.940Z",
		"size": 373,
		"path": "../public/assets/auth-CCn13Eb9.js"
	},
	"/assets/blog-api-Dmh-c188.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"394-oCFt2RHbrs095mcsJlRnbCCjIyk\"",
		"mtime": "2026-10-21T22:31:34.940Z",
		"size": 916,
		"path": "../public/assets/blog-api-Dmh-c188.js"
	},
	"/assets/blog-Cja7QPl1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104-BdUF4mcjFoHePwGBDAEZkvlGzIY\"",
		"mtime": "2026-10-21T22:31:34.940Z",
		"size": 260,
		"path": "../public/assets/blog-Cja7QPl1.js"
	},
	"/assets/blogs-BkPvQTNQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"124-OgKxZWZoRjYThWlKFftMj19WqIA\"",
		"mtime": "2026-10-21T22:31:34.940Z",
		"size": 292,
		"path": "../public/assets/blogs-BkPvQTNQ.js"
	},
	"/assets/blogs.index-B3XAKnKv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"199b-Y1tIXzMfv4pd0oH2ZiYvUPvsie4\"",
		"mtime": "2026-10-21T22:31:34.941Z",
		"size": 6555,
		"path": "../public/assets/blogs.index-B3XAKnKv.js"
	},
	"/assets/blogs._slug-CGLMy1qc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13cf-qr5s3hZUtvt7+ZKciYgxlhoSSZc\"",
		"mtime": "2026-10-21T22:31:34.941Z",
		"size": 5071,
		"path": "../public/assets/blogs._slug-CGLMy1qc.js"
	},
	"/assets/clock-ACw3eS8R.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-dWH+HC0m4Anf4U52r82nhRvbqdg\"",
		"mtime": "2026-10-21T22:31:34.941Z",
		"size": 169,
		"path": "../public/assets/clock-ACw3eS8R.js"
	},
	"/assets/blogs._slug-pmlMjgp_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43c-46lGIfF+DnegI+KVFng+qB0kEU0\"",
		"mtime": "2026-10-21T22:31:34.941Z",
		"size": 1084,
		"path": "../public/assets/blogs._slug-pmlMjgp_.js"
	},
	"/assets/contact-B3oRd3Uv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-Xpz961a2oBq9Dog77dE4m3Q/4CI\"",
		"mtime": "2026-10-21T22:31:34.948Z",
		"size": 150,
		"path": "../public/assets/contact-B3oRd3Uv.js"
	},
	"/assets/content-api-DMW3ISD5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"674-WE6aRFKCi46N3QAV4WfZvnKXDeU\"",
		"mtime": "2026-10-21T22:31:34.949Z",
		"size": 1652,
		"path": "../public/assets/content-api-DMW3ISD5.js"
	},
	"/assets/createLucideIcon-Bsi8MwWX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a4-eUEWWmJoxaJdAMBFcO/tnOMlrIs\"",
		"mtime": "2026-10-21T22:31:34.950Z",
		"size": 1188,
		"path": "../public/assets/createLucideIcon-Bsi8MwWX.js"
	},
	"/assets/createServerFn-BpMUg3rS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9551-E3Z2kqhlFvUX6dgZPdZ22I/unnE\"",
		"mtime": "2026-10-21T22:31:34.951Z",
		"size": 38225,
		"path": "../public/assets/createServerFn-BpMUg3rS.js"
	},
	"/assets/credentials-CaBWH2xk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-6SrEofw3LkoZR4C1eTrcJ4nouEc\"",
		"mtime": "2026-10-21T22:31:34.951Z",
		"size": 154,
		"path": "../public/assets/credentials-CaBWH2xk.js"
	},
	"/assets/data-Dz5FGj9F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29be-PenVhfdg7+FNRXleLImDtgI7ijI\"",
		"mtime": "2026-10-21T22:31:34.952Z",
		"size": 10686,
		"path": "../public/assets/data-Dz5FGj9F.js"
	},
	"/assets/education-CPOKdcKE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"98-Q4W38KhCOpcsIUo4CfEkokIBFhw\"",
		"mtime": "2026-10-21T22:31:34.952Z",
		"size": 152,
		"path": "../public/assets/education-CPOKdcKE.js"
	},
	"/assets/experience-C7WWliee.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-C7wPiFIeXRzoErtb0E5GV5nmGGc\"",
		"mtime": "2026-10-21T22:31:34.952Z",
		"size": 153,
		"path": "../public/assets/experience-C7WWliee.js"
	},
	"/assets/footer-8566BPzQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e26-Cm+LaLqtEHEHWggJK+k4sYpi2nI\"",
		"mtime": "2026-10-21T22:31:34.952Z",
		"size": 3622,
		"path": "../public/assets/footer-8566BPzQ.js"
	},
	"/assets/hobbies._id-B3pi2Ytj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f4-fCKEL6I9tmsZSKFMSWeA3xTi04s\"",
		"mtime": "2026-10-21T22:31:34.952Z",
		"size": 1780,
		"path": "../public/assets/hobbies._id-B3pi2Ytj.js"
	},
	"/assets/hobbies._id-BrCSTPS9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d0-HCfYcYMwugDB1U5NOxU6aFV+OHA\"",
		"mtime": "2026-10-21T22:31:34.953Z",
		"size": 1232,
		"path": "../public/assets/hobbies._id-BrCSTPS9.js"
	},
	"/assets/home-page-DhaW7L-b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"72d3-eqTCiIDusxDAqZ/39z2pywM0YEk\"",
		"mtime": "2026-10-21T22:31:34.953Z",
		"size": 29395,
		"path": "../public/assets/home-page-DhaW7L-b.js"
	},
	"/assets/leadership-dQoDIuOe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-qtqCDeEb5TSIdsiro7ZVSxvQkMc\"",
		"mtime": "2026-10-21T22:31:34.963Z",
		"size": 153,
		"path": "../public/assets/leadership-dQoDIuOe.js"
	},
	"/assets/index-DfAjMio_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"47026-0SeMgIooyyPCstlJqrD0PI/7Brg\"",
		"mtime": "2026-10-21T22:31:34.936Z",
		"size": 290854,
		"path": "../public/assets/index-DfAjMio_.js"
	},
	"/assets/link-S7LRuTfm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4cdc-eREZUwZN7tZw3FTcKg+AWZvkERs\"",
		"mtime": "2026-10-21T22:31:34.963Z",
		"size": 19676,
		"path": "../public/assets/link-S7LRuTfm.js"
	},
	"/assets/linkedin-u5HFppLN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"288-jMPnWe0CtDMW1jTPR26rP2O9vvw\"",
		"mtime": "2026-10-21T22:31:34.963Z",
		"size": 648,
		"path": "../public/assets/linkedin-u5HFppLN.js"
	},
	"/assets/login-CvItVjhB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b1b-ZrX3oow6ZqsCy4X43csToeBIGo0\"",
		"mtime": "2026-10-21T22:31:34.963Z",
		"size": 2843,
		"path": "../public/assets/login-CvItVjhB.js"
	},
	"/assets/mail-DG1jw-ZL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d5-koDo7i/uHmvpJBdU9Bgr8BQCQg0\"",
		"mtime": "2026-10-21T22:31:34.963Z",
		"size": 213,
		"path": "../public/assets/mail-DG1jw-ZL.js"
	},
	"/assets/matchContext-D3U4xTeB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-DwmzeRbgIoGnSal38kX5rMBV8lg\"",
		"mtime": "2026-10-21T22:31:34.965Z",
		"size": 155,
		"path": "../public/assets/matchContext-D3U4xTeB.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-21T22:31:34.965Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/preload-helper-Bz2bP3gn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1438-5qRr7tQb5PnNxgoSNkio9GOvpUk\"",
		"mtime": "2026-10-21T22:31:34.965Z",
		"size": 5176,
		"path": "../public/assets/preload-helper-Bz2bP3gn.js"
	},
	"/assets/og-default-pbf2f7-o.jpg": {
		"type": "image/jpeg",
		"etag": "\"14284-Ddgel7POaWWyRyBnFket0+nATmE\"",
		"mtime": "2026-10-21T22:31:35.052Z",
		"size": 82564,
		"path": "../public/assets/og-default-pbf2f7-o.jpg"
	},
	"/assets/projects-BqJ9kDaE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-/wuehxSAv8AY9NEeBRC0Al2nbbg\"",
		"mtime": "2026-10-21T22:31:34.984Z",
		"size": 151,
		"path": "../public/assets/projects-BqJ9kDaE.js"
	},
	"/assets/products-D4nm1AL3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97-/h8hN85NOBzZ0mwEsG8vv+6Ma0I\"",
		"mtime": "2026-10-21T22:31:34.965Z",
		"size": 151,
		"path": "../public/assets/products-D4nm1AL3.js"
	},
	"/assets/routes-Db9XKJhM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85-L+aogeY5PeKZX9toXYwJIt46O/M\"",
		"mtime": "2026-10-21T22:31:34.995Z",
		"size": 133,
		"path": "../public/assets/routes-Db9XKJhM.js"
	},
	"/assets/sections-CwHVBBuV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42b-reGpfboPZp/F8Srm9B81UFRIGSo\"",
		"mtime": "2026-10-21T22:31:34.996Z",
		"size": 1067,
		"path": "../public/assets/sections-CwHVBBuV.js"
	},
	"/assets/send-DZB5f5ks.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122-oVx/tgxRxSsa+jzDm5Zb9omKcE8\"",
		"mtime": "2026-10-21T22:31:34.997Z",
		"size": 290,
		"path": "../public/assets/send-DZB5f5ks.js"
	},
	"/assets/raiyan-about-7jhdrrFZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"164e4-15NT4hVAncxoXkIY4tfxBT53rOE\"",
		"mtime": "2026-10-21T22:31:35.168Z",
		"size": 91364,
		"path": "../public/assets/raiyan-about-7jhdrrFZ.jpg"
	},
	"/assets/seo-bT_-fsB6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b0f-qCKOPfA9A/SwcRdWQpiJESrb+5w\"",
		"mtime": "2026-10-21T22:31:35.050Z",
		"size": 2831,
		"path": "../public/assets/seo-bT_-fsB6.js"
	},
	"/assets/stories._id-BBCiyuwk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6fc-kEwEhRqePRhJNt2iDEBvt/N/SjU\"",
		"mtime": "2026-10-21T22:31:35.051Z",
		"size": 1788,
		"path": "../public/assets/stories._id-BBCiyuwk.js"
	},
	"/assets/stories._id-U93tpuMb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d0-rk1BdaiMUXtNxihcYmPodR5Hbwo\"",
		"mtime": "2026-10-21T22:31:35.052Z",
		"size": 1232,
		"path": "../public/assets/stories._id-U93tpuMb.js"
	},
	"/assets/styles-D_RP8Rr-.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"88a9-3jjmVMN6fYPvYpSBXEjt9osnsDI\"",
		"mtime": "2026-10-21T22:31:35.169Z",
		"size": 34985,
		"path": "../public/assets/styles-D_RP8Rr-.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_w6ATrT = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_w6ATrT
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
