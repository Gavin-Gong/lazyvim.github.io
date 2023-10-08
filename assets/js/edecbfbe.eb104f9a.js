"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[9454],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=a.createContext({}),u=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=u(n.components);return a.createElement(s.Provider,{value:e},n.children)},d="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),d=u(t),p=i,f=d["".concat(s,".").concat(p)]||d[p]||m[p]||r;return t?a.createElement(f,l(l({ref:e},c),{},{components:t})):a.createElement(f,l({ref:e},c))}));function f(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,l=new Array(r);l[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o[d]="string"==typeof n?n:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(n,e,t)=>{t.d(e,{Z:()=>l});var a=t(7294),i=t(6010);const r="tabItem_Ymn6";function l(n){let{children:e,hidden:t,className:l}=n;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:t},e)}},4866:(n,e,t)=>{t.d(e,{Z:()=>T});var a=t(7462),i=t(7294),r=t(6010),l=t(2466),o=t(6550),s=t(1980),u=t(7392),c=t(12);function d(n){return function(n){return i.Children.map(n,(n=>{if(!n||(0,i.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:i}}=n;return{value:e,label:t,attributes:a,default:i}}))}function m(n){const{values:e,children:t}=n;return(0,i.useMemo)((()=>{const n=e??d(t);return function(n){const e=(0,u.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function p(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function f(n){let{queryString:e=!1,groupId:t}=n;const a=(0,o.k6)(),r=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,s._X)(r),(0,i.useCallback)((n=>{if(!r)return;const e=new URLSearchParams(a.location.search);e.set(r,n),a.replace({...a.location,search:e.toString()})}),[r,a])]}function h(n){const{defaultValue:e,queryString:t=!1,groupId:a}=n,r=m(n),[l,o]=(0,i.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:r}))),[s,u]=f({queryString:t,groupId:a}),[d,h]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[a,r]=(0,c.Nk)(t);return[a,(0,i.useCallback)((n=>{t&&r.set(n)}),[t,r])]}({groupId:a}),v=(()=>{const n=s??d;return p({value:n,tabValues:r})?n:null})();(0,i.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,i.useCallback)((n=>{if(!p({value:n,tabValues:r}))throw new Error(`Can't select invalid tab value=${n}`);o(n),u(n),h(n)}),[u,h,r]),tabValues:r}}var v=t(2389);const b="tabList__CuJ",g="tabItem_LNqP";function y(n){let{className:e,block:t,selectedValue:o,selectValue:s,tabValues:u}=n;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=n=>{const e=n.currentTarget,t=c.indexOf(e),a=u[t].value;a!==o&&(d(e),s(a))},p=n=>{let e=null;switch(n.key){case"Enter":m(n);break;case"ArrowRight":{const t=c.indexOf(n.currentTarget)+1;e=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(n.currentTarget)-1;e=c[t]??c[c.length-1];break}}e?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},e)},u.map((n=>{let{value:e,label:t,attributes:l}=n;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:n=>c.push(n),onKeyDown:p,onClick:m},l,{className:(0,r.Z)("tabs__item",g,l?.className,{"tabs__item--active":o===e})}),t??e)})))}function k(n){let{lazy:e,children:t,selectedValue:a}=n;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=r.find((n=>n.props.value===a));return n?(0,i.cloneElement)(n,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((n,e)=>(0,i.cloneElement)(n,{key:e,hidden:n.props.value!==a}))))}function _(n){const e=h(n);return i.createElement("div",{className:(0,r.Z)("tabs-container",b)},i.createElement(y,(0,a.Z)({},n,e)),i.createElement(k,(0,a.Z)({},n,e)))}function T(n){const e=(0,v.Z)();return i.createElement(_,(0,a.Z)({key:String(e)},n))}},2385:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=t(7462),i=(t(7294),t(3905)),r=t(4866),l=t(5162);const o={},s="UI",u={unversionedId:"plugins/ui",id:"plugins/ui",title:"UI",description:"nvim-notify",source:"@site/docs/plugins/ui.md",sourceDirName:"plugins",slug:"/plugins/ui",permalink:"/plugins/ui",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/ui.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TreeSitter",permalink:"/plugins/treesitter"},next:{title:"Util",permalink:"/plugins/util"}},c={},d=[{value:"nvim-notify",id:"nvim-notify",level:2},{value:"dressing.nvim",id:"dressingnvim",level:2},{value:"bufferline.nvim",id:"bufferlinenvim",level:2},{value:"lualine.nvim",id:"lualinenvim",level:2},{value:"indent-blankline.nvim",id:"indent-blanklinenvim",level:2},{value:"mini.indentscope",id:"miniindentscope",level:2},{value:"which-key.nvim",id:"which-keynvim",level:2},{value:"noice.nvim",id:"noicenvim",level:2},{value:"alpha-nvim",id:"alpha-nvim",level:2},{value:"nvim-navic",id:"nvim-navic",level:2},{value:"nvim-web-devicons",id:"nvim-web-devicons",level:2},{value:"nui.nvim",id:"nuinvim",level:2}],m={toc:d};function p(n){let{components:e,...t}=n;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ui"},"UI"),(0,i.kt)("h2",{id:"nvim-notify"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rcarriga/nvim-notify"},"nvim-notify")),(0,i.kt)("p",null," Better ",(0,i.kt)("inlineCode",{parentName:"p"},"vim.notify()")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  timeout = 3000,\n  max_height = function()\n    return math.floor(vim.o.lines * 0.75)\n  end,\n  max_width = function()\n    return math.floor(vim.o.columns * 0.75)\n  end,\n}\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "rcarriga/nvim-notify",\n  keys = {\n    {\n      "<leader>un",\n      function()\n        require("notify").dismiss({ silent = true, pending = true })\n      end,\n      desc = "Dismiss all Notifications",\n    },\n  },\n  opts = {\n    timeout = 3000,\n    max_height = function()\n      return math.floor(vim.o.lines * 0.75)\n    end,\n    max_width = function()\n      return math.floor(vim.o.columns * 0.75)\n    end,\n  },\n  init = function()\n    -- when noice is not enabled, install notify on VeryLazy\n    local Util = require("lazyvim.util")\n    if not Util.has("noice.nvim") then\n      Util.on_very_lazy(function()\n        vim.notify = require("notify")\n      end)\n    end\n  end,\n}\n')))),(0,i.kt)("h2",{id:"dressingnvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/stevearc/dressing.nvim"},"dressing.nvim")),(0,i.kt)("p",null," better vim.ui"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "stevearc/dressing.nvim",\n  lazy = true,\n  init = function()\n    ---@diagnostic disable-next-line: duplicate-set-field\n    vim.ui.select = function(...)\n      require("lazy").load({ plugins = { "dressing.nvim" } })\n      return vim.ui.select(...)\n    end\n    ---@diagnostic disable-next-line: duplicate-set-field\n    vim.ui.input = function(...)\n      require("lazy").load({ plugins = { "dressing.nvim" } })\n      return vim.ui.input(...)\n    end\n  end,\n}\n')))),(0,i.kt)("h2",{id:"bufferlinenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/akinsho/bufferline.nvim"},"bufferline.nvim")),(0,i.kt)("p",null," This is what powers LazyVim's fancy-looking\ntabs, which include filetype icons and close buttons."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  options = {\n    -- stylua: ignore\n    close_command = function(n) require("mini.bufremove").delete(n, false) end,\n    -- stylua: ignore\n    right_mouse_command = function(n) require("mini.bufremove").delete(n, false) end,\n    diagnostics = "nvim_lsp",\n    always_show_bufferline = false,\n    diagnostics_indicator = function(_, _, diag)\n      local icons = require("lazyvim.config").icons.diagnostics\n      local ret = (diag.error and icons.Error .. diag.error .. " " or "")\n        .. (diag.warning and icons.Warn .. diag.warning or "")\n      return vim.trim(ret)\n    end,\n    offsets = {\n      {\n        filetype = "neo-tree",\n        text = "Neo-tree",\n        highlight = "Directory",\n        text_align = "left",\n      },\n    },\n  },\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "akinsho/bufferline.nvim",\n  event = "VeryLazy",\n  keys = {\n    { "<leader>bp", "<Cmd>BufferLineTogglePin<CR>", desc = "Toggle pin" },\n    { "<leader>bP", "<Cmd>BufferLineGroupClose ungrouped<CR>", desc = "Delete non-pinned buffers" },\n  },\n  opts = {\n    options = {\n      -- stylua: ignore\n      close_command = function(n) require("mini.bufremove").delete(n, false) end,\n      -- stylua: ignore\n      right_mouse_command = function(n) require("mini.bufremove").delete(n, false) end,\n      diagnostics = "nvim_lsp",\n      always_show_bufferline = false,\n      diagnostics_indicator = function(_, _, diag)\n        local icons = require("lazyvim.config").icons.diagnostics\n        local ret = (diag.error and icons.Error .. diag.error .. " " or "")\n          .. (diag.warning and icons.Warn .. diag.warning or "")\n        return vim.trim(ret)\n      end,\n      offsets = {\n        {\n          filetype = "neo-tree",\n          text = "Neo-tree",\n          highlight = "Directory",\n          text_align = "left",\n        },\n      },\n    },\n  },\n  config = function(_, opts)\n    require("bufferline").setup(opts)\n    -- Fix bufferline when restoring a session\n    vim.api.nvim_create_autocmd("BufAdd", {\n      callback = function()\n        vim.schedule(function()\n          pcall(nvim_bufferline)\n        end)\n      end,\n    })\n  end,\n}\n')))),(0,i.kt)("h2",{id:"lualinenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lualine/lualine.nvim"},"lualine.nvim")),(0,i.kt)("p",null," statusline"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local icons = require("lazyvim.config").icons\n  local Util = require("lazyvim.util")\n\n  vim.o.laststatus = vim.g.lualine_laststatus\n\n  return {\n    options = {\n      theme = "auto",\n      globalstatus = true,\n      disabled_filetypes = { statusline = { "dashboard", "alpha" } },\n    },\n    sections = {\n      lualine_a = { "mode" },\n      lualine_b = { "branch" },\n      lualine_c = {\n        {\n          "diagnostics",\n          symbols = {\n            error = icons.diagnostics.Error,\n            warn = icons.diagnostics.Warn,\n            info = icons.diagnostics.Info,\n            hint = icons.diagnostics.Hint,\n          },\n        },\n        { "filetype", icon_only = true, separator = "", padding = { left = 1, right = 0 } },\n        { "filename", path = 1, symbols = { modified = " \uf0f6 ", readonly = "", unnamed = "" } },\n        -- stylua: ignore\n        {\n          function() return require("nvim-navic").get_location() end,\n          cond = function() return package.loaded["nvim-navic"] and require("nvim-navic").is_available() end,\n        },\n      },\n      lualine_x = {\n        -- stylua: ignore\n        {\n          function() return require("noice").api.status.command.get() end,\n          cond = function() return package.loaded["noice"] and require("noice").api.status.command.has() end,\n          color = Util.fg("Statement"),\n        },\n        -- stylua: ignore\n        {\n          function() return require("noice").api.status.mode.get() end,\n          cond = function() return package.loaded["noice"] and require("noice").api.status.mode.has() end,\n          color = Util.fg("Constant"),\n        },\n        -- stylua: ignore\n        {\n          function() return "\uf46f  " .. require("dap").status() end,\n          cond = function () return package.loaded["dap"] and require("dap").status() ~= "" end,\n          color = Util.fg("Debug"),\n        },\n        { require("lazy.status").updates, cond = require("lazy.status").has_updates, color = Util.fg("Special") },\n        {\n          "diff",\n          symbols = {\n            added = icons.git.added,\n            modified = icons.git.modified,\n            removed = icons.git.removed,\n          },\n        },\n      },\n      lualine_y = {\n        { "progress", separator = " ", padding = { left = 1, right = 0 } },\n        { "location", padding = { left = 0, right = 1 } },\n      },\n      lualine_z = {\n        function()\n          return "\uf43a " .. os.date("%R")\n        end,\n      },\n    },\n    extensions = { "neo-tree", "lazy" },\n  }\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-lualine/lualine.nvim",\n  event = "VeryLazy",\n  init = function()\n    vim.g.lualine_laststatus = vim.o.laststatus\n    vim.o.laststatus = 0\n  end,\n  opts = function()\n    local icons = require("lazyvim.config").icons\n    local Util = require("lazyvim.util")\n\n    vim.o.laststatus = vim.g.lualine_laststatus\n\n    return {\n      options = {\n        theme = "auto",\n        globalstatus = true,\n        disabled_filetypes = { statusline = { "dashboard", "alpha" } },\n      },\n      sections = {\n        lualine_a = { "mode" },\n        lualine_b = { "branch" },\n        lualine_c = {\n          {\n            "diagnostics",\n            symbols = {\n              error = icons.diagnostics.Error,\n              warn = icons.diagnostics.Warn,\n              info = icons.diagnostics.Info,\n              hint = icons.diagnostics.Hint,\n            },\n          },\n          { "filetype", icon_only = true, separator = "", padding = { left = 1, right = 0 } },\n          { "filename", path = 1, symbols = { modified = " \uf0f6 ", readonly = "", unnamed = "" } },\n          -- stylua: ignore\n          {\n            function() return require("nvim-navic").get_location() end,\n            cond = function() return package.loaded["nvim-navic"] and require("nvim-navic").is_available() end,\n          },\n        },\n        lualine_x = {\n          -- stylua: ignore\n          {\n            function() return require("noice").api.status.command.get() end,\n            cond = function() return package.loaded["noice"] and require("noice").api.status.command.has() end,\n            color = Util.fg("Statement"),\n          },\n          -- stylua: ignore\n          {\n            function() return require("noice").api.status.mode.get() end,\n            cond = function() return package.loaded["noice"] and require("noice").api.status.mode.has() end,\n            color = Util.fg("Constant"),\n          },\n          -- stylua: ignore\n          {\n            function() return "\uf46f  " .. require("dap").status() end,\n            cond = function () return package.loaded["dap"] and require("dap").status() ~= "" end,\n            color = Util.fg("Debug"),\n          },\n          { require("lazy.status").updates, cond = require("lazy.status").has_updates, color = Util.fg("Special") },\n          {\n            "diff",\n            symbols = {\n              added = icons.git.added,\n              modified = icons.git.modified,\n              removed = icons.git.removed,\n            },\n          },\n        },\n        lualine_y = {\n          { "progress", separator = " ", padding = { left = 1, right = 0 } },\n          { "location", padding = { left = 0, right = 1 } },\n        },\n        lualine_z = {\n          function()\n            return "\uf43a " .. os.date("%R")\n          end,\n        },\n      },\n      extensions = { "neo-tree", "lazy" },\n    }\n  end,\n}\n')))),(0,i.kt)("h2",{id:"indent-blanklinenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/lukas-reineke/indent-blankline.nvim"},"indent-blankline.nvim")),(0,i.kt)("p",null," indent guides for Neovim"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  indent = {\n    char = "\u2502",\n    tab_char = "\u2502",\n  },\n  scope = { enabled = false },\n  exclude = {\n    filetypes = {\n      "help",\n      "alpha",\n      "dashboard",\n      "neo-tree",\n      "Trouble",\n      "lazy",\n      "mason",\n      "notify",\n      "toggleterm",\n      "lazyterm",\n    },\n  },\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "lukas-reineke/indent-blankline.nvim",\n  event = "LazyFile",\n  opts = {\n    indent = {\n      char = "\u2502",\n      tab_char = "\u2502",\n    },\n    scope = { enabled = false },\n    exclude = {\n      filetypes = {\n        "help",\n        "alpha",\n        "dashboard",\n        "neo-tree",\n        "Trouble",\n        "lazy",\n        "mason",\n        "notify",\n        "toggleterm",\n        "lazyterm",\n      },\n    },\n  },\n  main = "ibl",\n}\n')))),(0,i.kt)("h2",{id:"miniindentscope"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.indentscope"},"mini.indentscope")),(0,i.kt)("p",null," Active indent guide and indent text objects. When you're browsing\ncode, this highlights the current level of indentation, and animates\nthe highlighting."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- symbol = "\u258f",\n  symbol = "\u2502",\n  options = { try_as_border = true },\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.indentscope",\n  version = false, -- wait till new 0.7.0 release to put it back on semver\n  event = "LazyFile",\n  opts = {\n    -- symbol = "\u258f",\n    symbol = "\u2502",\n    options = { try_as_border = true },\n  },\n  init = function()\n    vim.api.nvim_create_autocmd("FileType", {\n      pattern = {\n        "help",\n        "alpha",\n        "dashboard",\n        "neo-tree",\n        "Trouble",\n        "lazy",\n        "mason",\n        "notify",\n        "toggleterm",\n        "lazyterm",\n      },\n      callback = function()\n        vim.b.miniindentscope_disable = true\n      end,\n    })\n  end,\n}\n')))),(0,i.kt)("h2",{id:"which-keynvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/which-key.nvim"},"which-key.nvim")),(0,i.kt)("p",null," Displays a popup with possible key bindings of the command you started typing"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if require("lazyvim.util").has("noice.nvim") then\n    opts.defaults["<leader>sn"] = { name = "+noice" }\n  end\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/which-key.nvim",\n  opts = function(_, opts)\n    if require("lazyvim.util").has("noice.nvim") then\n      opts.defaults["<leader>sn"] = { name = "+noice" }\n    end\n  end,\n}\n')))),(0,i.kt)("h2",{id:"noicenvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/folke/noice.nvim"},"noice.nvim")),(0,i.kt)("p",null," Highly experimental plugin that completely replaces the UI for messages, cmdline and the popupmenu."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  lsp = {\n    override = {\n      ["vim.lsp.util.convert_input_to_markdown_lines"] = true,\n      ["vim.lsp.util.stylize_markdown"] = true,\n      ["cmp.entry.get_documentation"] = true,\n    },\n  },\n  routes = {\n    {\n      filter = {\n        event = "msg_show",\n        any = {\n          { find = "%d+L, %d+B" },\n          { find = "; after #%d+" },\n          { find = "; before #%d+" },\n        },\n      },\n      view = "mini",\n    },\n  },\n  presets = {\n    bottom_search = true,\n    command_palette = true,\n    long_message_to_split = true,\n    inc_rename = true,\n  },\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/noice.nvim",\n  event = "VeryLazy",\n  opts = {\n    lsp = {\n      override = {\n        ["vim.lsp.util.convert_input_to_markdown_lines"] = true,\n        ["vim.lsp.util.stylize_markdown"] = true,\n        ["cmp.entry.get_documentation"] = true,\n      },\n    },\n    routes = {\n      {\n        filter = {\n          event = "msg_show",\n          any = {\n            { find = "%d+L, %d+B" },\n            { find = "; after #%d+" },\n            { find = "; before #%d+" },\n          },\n        },\n        view = "mini",\n      },\n    },\n    presets = {\n      bottom_search = true,\n      command_palette = true,\n      long_message_to_split = true,\n      inc_rename = true,\n    },\n  },\n  -- stylua: ignore\n  keys = {\n    { "<S-Enter>", function() require("noice").redirect(vim.fn.getcmdline()) end, mode = "c", desc = "Redirect Cmdline" },\n    { "<leader>snl", function() require("noice").cmd("last") end, desc = "Noice Last Message" },\n    { "<leader>snh", function() require("noice").cmd("history") end, desc = "Noice History" },\n    { "<leader>sna", function() require("noice").cmd("all") end, desc = "Noice All" },\n    { "<leader>snd", function() require("noice").cmd("dismiss") end, desc = "Dismiss All" },\n    { "<c-f>", function() if not require("noice.lsp").scroll(4) then return "<c-f>" end end, silent = true, expr = true, desc = "Scroll forward", mode = {"i", "n", "s"} },\n    { "<c-b>", function() if not require("noice.lsp").scroll(-4) then return "<c-b>" end end, silent = true, expr = true, desc = "Scroll backward", mode = {"i", "n", "s"}},\n  },\n}\n')))),(0,i.kt)("h2",{id:"alpha-nvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/goolord/alpha-nvim"},"alpha-nvim")),(0,i.kt)("p",null,' Dashboard. This runs when neovim starts, and is what displays\nthe "LAZYVIM" banner.'),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local dashboard = require("alpha.themes.dashboard")\n  local logo = [[\n       \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n       \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551\n       \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d\n  ]]\n\n  dashboard.section.header.val = vim.split(logo, "\\n")\n  dashboard.section.buttons.val = {\n    dashboard.button("f", "\uf002 " .. " Find file", "<cmd> Telescope find_files <cr>"),\n    dashboard.button("n", "\uf15b " .. " New file", "<cmd> ene <BAR> startinsert <cr>"),\n    dashboard.button("r", "\uf0c5 " .. " Recent files", "<cmd> Telescope oldfiles <cr>"),\n    dashboard.button("g", "\uf022 " .. " Find text", "<cmd> Telescope live_grep <cr>"),\n    dashboard.button("c", "\uf423 " .. " Config", "<cmd> e $MYVIMRC <cr>"),\n    dashboard.button("s", "\ue348 " .. " Restore Session", [[<cmd> lua require("persistence").load() <cr>]]),\n    dashboard.button("l", "\udb81\udcb2 " .. " Lazy", "<cmd> Lazy <cr>"),\n    dashboard.button("q", "\uf426 " .. " Quit", "<cmd> qa <cr>"),\n  }\n  for _, button in ipairs(dashboard.section.buttons.val) do\n    button.opts.hl = "AlphaButtons"\n    button.opts.hl_shortcut = "AlphaShortcut"\n  end\n  dashboard.section.header.opts.hl = "AlphaHeader"\n  dashboard.section.buttons.opts.hl = "AlphaButtons"\n  dashboard.section.footer.opts.hl = "AlphaFooter"\n  dashboard.opts.layout[1].val = 8\n  return dashboard\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "goolord/alpha-nvim",\n  event = "VimEnter",\n  opts = function()\n    local dashboard = require("alpha.themes.dashboard")\n    local logo = [[\n         \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n         \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551\n         \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d\n    ]]\n\n    dashboard.section.header.val = vim.split(logo, "\\n")\n    dashboard.section.buttons.val = {\n      dashboard.button("f", "\uf002 " .. " Find file", "<cmd> Telescope find_files <cr>"),\n      dashboard.button("n", "\uf15b " .. " New file", "<cmd> ene <BAR> startinsert <cr>"),\n      dashboard.button("r", "\uf0c5 " .. " Recent files", "<cmd> Telescope oldfiles <cr>"),\n      dashboard.button("g", "\uf022 " .. " Find text", "<cmd> Telescope live_grep <cr>"),\n      dashboard.button("c", "\uf423 " .. " Config", "<cmd> e $MYVIMRC <cr>"),\n      dashboard.button("s", "\ue348 " .. " Restore Session", [[<cmd> lua require("persistence").load() <cr>]]),\n      dashboard.button("l", "\udb81\udcb2 " .. " Lazy", "<cmd> Lazy <cr>"),\n      dashboard.button("q", "\uf426 " .. " Quit", "<cmd> qa <cr>"),\n    }\n    for _, button in ipairs(dashboard.section.buttons.val) do\n      button.opts.hl = "AlphaButtons"\n      button.opts.hl_shortcut = "AlphaShortcut"\n    end\n    dashboard.section.header.opts.hl = "AlphaHeader"\n    dashboard.section.buttons.opts.hl = "AlphaButtons"\n    dashboard.section.footer.opts.hl = "AlphaFooter"\n    dashboard.opts.layout[1].val = 8\n    return dashboard\n  end,\n  config = function(_, dashboard)\n    -- close Lazy and re-open when the dashboard is ready\n    if vim.o.filetype == "lazy" then\n      vim.cmd.close()\n      vim.api.nvim_create_autocmd("User", {\n        once = true,\n        pattern = "AlphaReady",\n        callback = function()\n          require("lazy").show()\n        end,\n      })\n    end\n\n    require("alpha").setup(dashboard.opts)\n\n    vim.api.nvim_create_autocmd("User", {\n      once = true,\n      pattern = "LazyVimStarted",\n      callback = function()\n        local stats = require("lazy").stats()\n        local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n        dashboard.section.footer.val = "\u26a1 Neovim loaded " .. stats.count .. " plugins in " .. ms .. "ms"\n        pcall(vim.cmd.AlphaRedraw)\n      end,\n    })\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-navic"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/SmiteshP/nvim-navic"},"nvim-navic")),(0,i.kt)("p",null," lsp symbol navigation for lualine. This shows where\nin the code structure you are - within functions, classes,\netc - in the statusline."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  return {\n    separator = " ",\n    highlight = true,\n    depth_limit = 5,\n    icons = require("lazyvim.config").icons.kinds,\n    lazy_update_context = true,\n  }\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "SmiteshP/nvim-navic",\n  lazy = true,\n  init = function()\n    vim.g.navic_silence = true\n    require("lazyvim.util").on_attach(function(client, buffer)\n      if client.server_capabilities.documentSymbolProvider then\n        require("nvim-navic").attach(client, buffer)\n      end\n    end)\n  end,\n  opts = function()\n    return {\n      separator = " ",\n      highlight = true,\n      depth_limit = 5,\n      icons = require("lazyvim.config").icons.kinds,\n      lazy_update_context = true,\n    }\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-web-devicons"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-tree/nvim-web-devicons"},"nvim-web-devicons")),(0,i.kt)("p",null," icons"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "nvim-tree/nvim-web-devicons", lazy = true }\n')))),(0,i.kt)("h2",{id:"nuinvim"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/MunifTanjim/nui.nvim"},"nui.nvim")),(0,i.kt)("p",null," ui components"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "MunifTanjim/nui.nvim", lazy = true }\n')))))}p.isMDXComponent=!0}}]);