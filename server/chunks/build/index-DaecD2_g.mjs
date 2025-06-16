import { _ as __nuxt_component_0 } from './nuxt-link-A74BPdwq.mjs';
import { ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([]);
    useHead({
      title: "\u6211\u7684 Nuxt \u90E8\u843D\u683C - \u9996\u9801",
      meta: [
        { name: "description", content: "\u4F7F\u7528 Nuxt.js \u5EFA\u7ACB\u7684\u975C\u614B\u90E8\u843D\u683C\u9996\u9801" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-94ae255a><h1 data-v-94ae255a>\u6240\u6709\u6587\u7AE0</h1><hr data-v-94ae255a><div class="blog-list" data-v-94ae255a><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(`<div class="blog-item" data-v-94ae255a><h2 data-v-94ae255a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/posts/${post.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(post.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h2><p class="post-meta" data-v-94ae255a> \u4F5C\u8005: ${ssrInterpolate(post.author)} | \u65E5\u671F: ${ssrInterpolate(post.date)}</p><p data-v-94ae255a>${ssrInterpolate(post.excerpt)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/posts/${post.slug}`,
          class: "read-more"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u95B1\u8B80\u66F4\u591A \xBB`);
            } else {
              return [
                createTextVNode("\u95B1\u8B80\u66F4\u591A \xBB")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-94ae255a"]]);

export { index as default };
//# sourceMappingURL=index-DaecD2_g.mjs.map
