import { _ as __nuxt_component_0 } from './nuxt-link-A74BPdwq.mjs';
import { ref, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { u as useHead } from './v3-DrSTN2L0.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.slug;
    const post = ref(null);
    useHead(() => ({
      title: post.value ? post.value.title : "\u6587\u7AE0\u4E0D\u5B58\u5728",
      meta: [
        { name: "description", content: post.value ? post.value.excerpt : "\u8A72\u6587\u7AE0\u4E0D\u5B58\u5728\u6216\u5DF2\u79FB\u9664\u3002" }
      ]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(post)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "blog-post" }, _attrs))} data-v-a1d97675><h1 data-v-a1d97675>${ssrInterpolate(unref(post).title)}</h1><p class="post-meta" data-v-a1d97675> \u4F5C\u8005: ${ssrInterpolate(unref(post).author)} | \u65E5\u671F: ${ssrInterpolate(unref(post).date)}</p><hr data-v-a1d97675><div class="post-content" data-v-a1d97675>${(_a = unref(post).content) != null ? _a : ""}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/posts/",
          class: "back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u2190 \u8FD4\u56DE\u90E8\u843D\u683C\u5217\u8868`);
            } else {
              return [
                createTextVNode("\u2190 \u8FD4\u56DE\u90E8\u843D\u683C\u5217\u8868")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-a1d97675><p data-v-a1d97675>\u6587\u7AE0\u4E0D\u5B58\u5728\u3002</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/posts/",
          class: "back-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u2190 \u8FD4\u56DE\u90E8\u843D\u683C\u5217\u8868`);
            } else {
              return [
                createTextVNode("\u2190 \u8FD4\u56DE\u90E8\u843D\u683C\u5217\u8868")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1d97675"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-oM8wRVa7.mjs.map
