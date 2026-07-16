// src/lib/collaboratives.ts
var roomKeyFromParams = (params) => {
  const keys = [["Organization", params.organizationId]];
  switch (params.type) {
    case "project-description": {
      keys.push(["Project", params.projectId]);
      break;
    }
    case "project-blog": {
      keys.push(["Project", params.projectId], ["Blog", params.blogId]);
      break;
    }
    case "project-tab": {
      keys.push(["Project", params.projectId], ["Tab", params.tabId]);
      break;
    }
    case "project-tab-item": {
      keys.push(["Project", params.projectId], ["Tab", params.tabId], ["Item", params.tabItemId]);
      break;
    }
    case "project-goal": {
      keys.push(["Project", params.projectId], ["Goal", params.goalId]);
      break;
    }
    default:
      return null;
  }
  return keys.map(([name, value]) => {
    return `${name}(${value})`;
  }).join("::");
};

// src/lib/permissions/isSuperAdmin.ts
var isSuperAdmin = (rights) => {
  return rights.roles.includes("superadmins");
};

// src/lib/permissions/isAdmin.ts
var isAdmin = (rights, organizationId) => {
  return !!(isSuperAdmin(rights) || rights.roles.includes(`organization:#${organizationId}:admins`));
};

// src/lib/permissions/isFacilitator.ts
var isFacilitator = (rights, organizationId) => {
  return rights.roles.includes(`organization:#${organizationId}:facilitators`);
};

// src/lib/permissions/isAdminOrFacilitator.ts
var isAdminOrFacilitator = (rights, organizationId) => {
  return isAdmin(rights, organizationId) || isFacilitator(rights, organizationId);
};

// src/lib/permissions/isViewer.ts
var isViewer = (rights, organizationId) => {
  return rights.roles.includes(`organization:#${organizationId}:viewers`);
};

// src/lib/permissions/isUser.ts
var isUser = (rights, organizationId) => {
  return rights.roles.includes(`organization:#${organizationId}:users`);
};

// src/lib/permissions/utils.ts
function hasPermission(permissions, app, permissionName, identification = null) {
  let perm = `${app}.${permissionName}`;
  if (identification !== null && identification !== void 0 && identification !== "") {
    perm += `.${identification}`;
  }
  return !!permissions[perm];
}

// src/lib/permissions/can.ts
var canPermission = (rights, organizationId, elementType, identification = null, perrmissionName) => {
  return isAdmin(rights, organizationId) || // check objects permissions
  hasPermission(rights.permissions, elementType, perrmissionName, identification) || hasPermission(rights.permissions, elementType, perrmissionName) || // check organizations permissions
  hasPermission(rights.permissions, "organizations", perrmissionName, organizationId) || hasPermission(rights.permissions, "organizations", perrmissionName);
};

// src/lib/permissions/rights.ts
var userRights = (user) => {
  const rawPermissions = user.permissions;
  const permissions = {};
  for (const permission of rawPermissions) {
    permissions[permission] = true;
  }
  return {
    roles: user.roles,
    permissions
  };
};

// src/lib/tiptap/options.ts
import TableHeader from "@tiptap/extension-table-header";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import TableRow from "@tiptap/extension-table-row";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";

// src/lib/tiptap/extensions/CustomTableCell.ts
import TableCell from "@tiptap/extension-table-cell";
var CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      // extend the existing attributes …
      //...(this.parent ? this.parent() : {}),
      ...TableCell?.config?.addAttributes?.call(this) || {},
      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-background-color"),
        renderHTML: (attributes) => {
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`
          };
        }
      }
    };
  }
});

// src/lib/tiptap/extensions/ExternalVideo.ts
import { Node, mergeAttributes } from "@tiptap/core";
var getFormatedVideoSrc = (newVideoId) => {
  let resolvedid = "";
  let link = "";
  if (newVideoId.includes("vimeo.com/")) {
    const spliturl = newVideoId.split("/");
    resolvedid = spliturl[spliturl.length - 1];
    link = `https://player.vimeo.com/video/${resolvedid}`;
  }
  if (newVideoId.includes("youtube.com/")) {
    const ytOptions = "?modestbranding=1&amp;fs=0&amp;rel=0&amp;hd=1&amp;disablekb=0&amp;showinfo=0&amp;iv_load_policy=0&amp;enablejsapi=1&amp;autoplay=0&amp;loop=0";
    if (newVideoId.includes("https://www.youtube.com/embed/") && newVideoId.includes(ytOptions)) {
      link = newVideoId;
    } else {
      let urlstr;
      if (newVideoId.includes("https://")) {
        urlstr = newVideoId;
      } else if (newVideoId.includes("http://")) {
        urlstr = newVideoId.replace("http://", "https://");
      } else {
        urlstr = "https://" + newVideoId;
      }
      const surl = new URL(urlstr);
      resolvedid = surl.searchParams.get("v") || "";
      link = "https://www.youtube.com/embed/" + resolvedid + ytOptions;
    }
  }
  if (newVideoId.includes("youtu.be/")) {
    const spliturl = newVideoId.split("/");
    resolvedid = spliturl[spliturl.length - 1];
    link = "https://www.youtube.com/embed/" + resolvedid + "?modestbranding=1&amp;fs=0&amp;rel=0&amp;hd=1&amp;disablekb=0&amp;showinfo=0&amp;iv_load_policy=0&amp;enablejsapi=1&amp;autoplay=0&amp;loop=0";
  }
  return link;
};
var ExternalVideo = Node.create({
  name: "external-video",
  addOptions() {
    return {
      inline: false,
      HTMLAttributes: {},
      sizes: ["small", "medium", "large", "full", "custom", "original"],
      aligns: ["left", "center", "right"]
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: true,
  addAttributes() {
    return {
      src: {
        default: null
      },
      title: {
        default: null
      },
      frameborder: {
        default: "0"
      },
      allow: {
        default: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      },
      allowfullscreen: {
        default: "allowfullscreen"
      },
      size: {
        default: "large",
        rendered: false
      },
      align: {
        default: "center",
        rendered: false
      }
    };
  },
  parseHTML() {
    return [
      {
        // old version for retro compatibility
        tag: "iframe",
        getAttrs: (node) => {
          if (node.classList.contains("custom-video")) {
            return false;
          }
          return {
            src: node.getAttribute("src"),
            title: node.getAttribute("title"),
            frameborder: node.getAttribute("frameborder"),
            allow: node.getAttribute("allow"),
            allowfullscreen: node.getAttribute("allowfullscreen"),
            size: "large",
            align: "center"
          };
        }
      },
      {
        // new version
        tag: "div.custom-video-wrapper",
        getAttrs: (wrapper) => {
          const node = wrapper.querySelector(".custom-video");
          if (!node) return false;
          let size = "large";
          this.options.sizes.forEach((s) => {
            const hasSize = wrapper.classList.contains("custom-video-wrapper-" + s);
            if (hasSize) {
              size = s;
            }
          });
          let align = "center";
          this.options.aligns.forEach((s) => {
            const hasAlign = wrapper.classList.contains("custom-video-wrapper-" + s);
            if (hasAlign) {
              align = s;
            }
          });
          return {
            src: node.getAttribute("src"),
            title: node.getAttribute("title"),
            frameborder: node.getAttribute("frameborder"),
            allow: node.getAttribute("allow"),
            allowfullscreen: node.getAttribute("allowfullscreen"),
            size,
            align
          };
        }
      }
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    HTMLAttributes.src = getFormatedVideoSrc(HTMLAttributes.src);
    HTMLAttributes.width = "440px";
    HTMLAttributes.height = "220px";
    HTMLAttributes.frameborder = 0;
    HTMLAttributes.allowfullscreen = true;
    const size = node.attrs.size;
    const align = node.attrs.align;
    HTMLAttributes.class = "custom-video custom-video-" + size + " custom-video-" + align;
    return [
      "div",
      {
        class: "custom-video-ctn"
      },
      [
        "div",
        {
          class: "custom-video-wrapper custom-video-wrapper-" + size + " custom-video-wrapper-" + align
        },
        ["iframe", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
      ]
    ];
  },
  addCommands() {
    return {
      setExternalVideo: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options
        });
      },
      deleteExternalVideo: () => ({ commands }) => {
        return commands.deleteSelection();
      },
      setAlign: (attributes) => ({ tr, dispatch }) => {
        if (!this.options.aligns.includes(attributes.align)) {
          return false;
        }
        const { selection } = tr;
        const options = {
          // @ts-expect-error , node not exists, check Why
          ...selection.node.attrs,
          ...attributes
        };
        const node = this.type.create(options);
        if (dispatch) {
          tr.replaceRangeWith(selection.from, selection.to, node);
        }
        return true;
      }
    };
  }
});

// src/lib/tiptap/extensions/CustomImage.ts
import { mergeAttributes as mergeAttributes2 } from "@tiptap/core";
import Image from "@tiptap/extension-image";
var CustomImage = Image.extend({
  addAttributes() {
    return {
      ...Image?.config?.addAttributes?.call(this) || {},
      size: {
        default: null,
        rendered: false
      }
    };
  },
  addOptions() {
    return {
      ...Image.options,
      inline: true,
      HTMLAttributes: {},
      sizes: ["small", "medium", "large", "full", "custom", "original"],
      allowBase64: false
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: true,
  addCommands() {
    return {
      // This is unchanged from the original
      // Image setImage function
      // However, if I extended addComands in
      // the same way as addAttributes `this`
      // seemed to lose context, so I've just
      // copied it in here directly
      setImage: (options) => ({ tr, dispatch }) => {
        if (!options["size"]) {
          options = {
            ...options,
            size: "original"
          };
        }
        const { selection } = tr;
        const node = this.type.create(options);
        if (dispatch) {
          tr.replaceRangeWith(selection.from, selection.to, node);
        }
        return true;
      }
    };
  },
  renderHTML({ node, HTMLAttributes }) {
    const size = node.attrs.size;
    HTMLAttributes.class = " custom-image-" + size;
    return ["img", mergeAttributes2(this.options.HTMLAttributes, HTMLAttributes)];
  },
  parseHTML() {
    const getAttrs = (dom) => {
      let size = "original";
      const sizes = this.options.sizes;
      sizes.forEach((s) => {
        const hasSize = dom.classList.contains("custom-image-" + s);
        if (hasSize) {
          size = s;
        }
      });
      return {
        src: dom.getAttribute("src"),
        title: dom.getAttribute("title"),
        alt: dom.getAttribute("alt"),
        size
      };
    };
    return [
      {
        tag: "img[src]",
        getAttrs
      }
    ];
  }
});

// src/lib/tiptap/extensions/CodeBlock.ts
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { mergeAttributes as mergeAttributes3 } from "@tiptap/core";
var DEFAULT_LANGUAGE = "plaintext";
var DEFAULT_THEME = "dark";
var DEFAULT_TAB = 2;
var CodeBlock = CodeBlockLowlight.extend({
  name: "code-block",
  addOptions() {
    return {
      ...this.parent?.(),
      themeClassPrefix: "theme-",
      tabClassPrefix: "tab-",
      defaultTheme: DEFAULT_THEME,
      defaultTab: DEFAULT_TAB
    };
  },
  addAttributes() {
    return {
      ...this.parent?.(),
      theme: {
        default: null,
        parseHTML: (element) => {
          const { themeClassPrefix } = this.options;
          const classNames = element.getAttribute("class")?.split(/\s+/).filter(Boolean) ?? [];
          const theme = classNames.find((c) => c.startsWith(themeClassPrefix))?.slice(themeClassPrefix.length);
          return theme ?? DEFAULT_THEME;
        },
        rendered: false
      },
      tab: {
        default: null,
        parseHTML: (element) => {
          const { tabClassPrefix } = this.options;
          const classNames = element.getAttribute("class")?.split(/\s+/).filter(Boolean) ?? [];
          const tab = classNames.find((c) => c.startsWith(tabClassPrefix))?.slice(tabClassPrefix.length);
          return tab ?? DEFAULT_TAB.toString();
        },
        rendered: false
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre.lpi-code-block",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    const langClass = node.attrs.language ? this.options.languageClassPrefix + node.attrs.language : null;
    const themeClass = node.attrs.theme ? this.options.themeClassPrefix + node.attrs.theme : this.options.themeClassPrefix + DEFAULT_THEME;
    const tabClass = node.attrs.tab ? this.options.tabClassPrefix + node.attrs.tab : this.options.tabClassPrefix + DEFAULT_TAB.toString();
    return [
      "pre",
      mergeAttributes3(this.options.HTMLAttributes, HTMLAttributes, {
        class: `lpi-code-block ${themeClass} ${tabClass}`
      }),
      [
        "code",
        {
          class: langClass,
          spellcheck: "false"
        },
        0
      ]
    ];
  }
});

// src/lib/tiptap/lowlight.ts
import { common, createLowlight } from "lowlight";
var lowlight = createLowlight(common);

// src/lib/tiptap/options.ts
var getExtensions = (options = {}) => [
  // StarterKit.configure no return a type satisfied AnyExtension, why ?
  StarterKit.configure({ ...options, codeBlock: false }),
  Link.configure({
    openOnClick: false
  }),
  TextStyle,
  Color,
  Underline,
  TextAlign.configure({
    types: ["heading", "paragraph"],
    alignments: ["left", "center", "right"]
  }),
  ExternalVideo,
  Table.configure({
    resizable: true,
    cellMinWidth: 300
  }),
  TableRow,
  TableHeader,
  CustomTableCell,
  CustomImage,
  CodeBlock.configure({
    lowlight
  })
];

// src/lib/permissions/projects/isOwner.ts
var isOwner = (rights, organizationId, projectId) => {
  return hasPermission(rights.permissions, "projects", "delete_project", projectId) || hasPermission(rights.permissions, "organizations", "delete_project", organizationId) || hasPermission(rights.permissions, "projects", "delete_project");
};

// src/lib/permissions/projects/isMember.ts
var isMember = (rights, organizationId, projectId) => {
  return isOwner(rights, organizationId, projectId) || isViewer(rights, organizationId) || isFacilitator(rights, organizationId);
};

// src/lib/permissions/projects/can.ts
var canPermissionProject = (rights, organizationId, projectId = null, perrmissionName) => {
  return canPermission(rights, organizationId, "projects", projectId, perrmissionName);
};
var canCreateProject = (rights, organizationId) => {
  return canPermissionProject(rights, organizationId, null, "add_project");
};
var canEditProject = (rights, organizationId, projectId) => {
  return canPermissionProject(rights, organizationId, projectId, "change_project");
};
var canDeleteProject = (rights, organizationId, projectId) => {
  return canPermissionProject(rights, organizationId, projectId, "delete_project");
};
var canCreateReview = (rights, organizationId, projectId) => {
  return canPermissionProject(rights, organizationId, projectId, "add_review");
};
var canEditReview = (rights, organizationId, projectId) => {
  return canPermissionProject(rights, organizationId, projectId, "change_review");
};
var canDeleteReview = (rights, organizationId, projectId) => {
  return canPermissionProject(rights, organizationId, projectId, "delete_review");
};
var canCreateComment = (rights, organizationId, projectId) => {
  return canPermissionProject(rights, organizationId, projectId, "delete_comment");
};
var canEditComment = (rights, organizationId, projectId) => {
  return canPermissionProject(rights, organizationId, projectId, "change_comment");
};
var canDeleteComment = (rights, organizationId, projectId) => {
  return canPermissionProject(rights, organizationId, projectId, "delete_comment");
};

// src/lib/permissions/groups/can.ts
var canCreateGroup = (rights, organizationId) => {
  return isAdmin(rights, organizationId) || hasPermission(rights.permissions, "peoplegroup", "add_peoplegroup") || hasPermission(rights.permissions, "organizations", "add_peoplegroup", organizationId) || hasPermission(rights.permissions, "organizations", "add_peoplegroup");
};
var canEditGroup = (rights, organizationId, groupId) => {
  return isAdmin(rights, organizationId) || hasPermission(rights.permissions, "peoplegroup", "change_peoplegroup", groupId) || hasPermission(rights.permissions, "peoplegroup", "change_peoplegroup") || hasPermission(rights.permissions, "organizations", "change_peoplegroup", organizationId) || hasPermission(rights.permissions, "organizations", "change_peoplegroup");
};

// src/lib/permissions/user/can.ts
var canEditUser = (rights, organizationId, userId) => {
  return isAdmin(rights, organizationId);
};

// src/lib/permissions/news/can.ts
var canCreateNews = (rights, organizationId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canEditNews = (rights, organizationId, newsId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canDeleteNews = (rights, organizationId, newsId) => {
  return isAdminOrFacilitator(rights, organizationId);
};

// src/lib/permissions/event/can.ts
var canCreateEvent = (rights, organizationId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canEditEvent = (rights, organizationId, eventId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canDeleteEvent = (rights, organizationId, eventId) => {
  return isAdminOrFacilitator(rights, organizationId);
};

// src/lib/permissions/instruction/can.ts
var canCreateInstruction = (rights, organizationId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canEditInstruction = (rights, organizationId, instructionId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
var canDeleteInstruction = (rights, organizationId, instructionId) => {
  return isAdminOrFacilitator(rights, organizationId);
};
export {
  CodeBlock,
  CustomImage,
  CustomTableCell,
  DEFAULT_LANGUAGE,
  DEFAULT_TAB,
  DEFAULT_THEME,
  ExternalVideo,
  canCreateComment,
  canCreateEvent,
  canCreateGroup,
  canCreateInstruction,
  canCreateNews,
  canCreateProject,
  canCreateReview,
  canDeleteComment,
  canDeleteEvent,
  canDeleteInstruction,
  canDeleteNews,
  canDeleteProject,
  canDeleteReview,
  canEditComment,
  canEditEvent,
  canEditGroup,
  canEditInstruction,
  canEditNews,
  canEditProject,
  canEditReview,
  canEditUser,
  canPermission,
  canPermissionProject,
  getExtensions,
  getFormatedVideoSrc,
  hasPermission,
  isAdmin,
  isAdminOrFacilitator,
  isFacilitator,
  isMember,
  isOwner,
  isSuperAdmin,
  isUser,
  isViewer,
  lowlight,
  roomKeyFromParams,
  userRights
};
//# sourceMappingURL=index.js.map