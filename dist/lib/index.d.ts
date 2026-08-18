import { P as ProviderParams, R as Right } from '../permissions-CUX6tqOY.js';
import { S as OrganizationModel, aH as Roles, bc as UserModel, a8 as ProjectModel, W as PeopleGroupModel, M as NewsModel, i as EventModel, p as InstructionModel } from '../instruction.model-DTfFAbDS.js';
import { P as PermissionType } from '../permissions.model-DCQ_saKg.js';
import { StarterKitOptions } from '@tiptap/starter-kit';
import * as _tiptap_core from '@tiptap/core';
import { Extensions, Node } from '@tiptap/core';
import * as highlight_js from 'highlight.js';
import * as hast from 'hast';
import * as _lowlight from 'lowlight';
import { j as ImageVariations } from '../utils-Def92TDC.js';
import * as _tiptap_extension_table_cell from '@tiptap/extension-table-cell';
import { Attrs } from '@tiptap/pm/model';
import { CodeBlockLowlightOptions } from '@tiptap/extension-code-block-lowlight';
import 'zod';

/**
 * genereate roomRoomKey form params provided to hocuspocus
 *
 * @function
 * @name roomKeyFromParams
 * @kind variable
 * @param {ProviderParams} params
 * @returns {string | null}
 * @exports
 */
declare const roomKeyFromParams: (params: ProviderParams) => string | null;

declare const isAdmin: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const isAdminOrFacilitator: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const isSuperAdmin: (rights: Right) => boolean;

declare const isFacilitator: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const isViewer: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const isUser: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;

declare const canPermission: (rights: Right, organizationId: OrganizationModel["id"], elementType: "projects" | "accounts" | "peoplegroup", identification: (number | string | Roles | null) | undefined, perrmissionName: PermissionType) => boolean;

declare function hasPermission(permissions: Right['permissions'], app: 'organizations' | 'projects' | 'accounts' | 'peoplegroup', permissionName: PermissionType, identification?: number | string | Roles | null): boolean;

/**
 * Generate User rights from usermodels
 *
 * @constant
 * @name userRights
 * @kind variable
 * @type {<U extends Pick<UserModel, "permissions" | "roles">>(user: U) => Right}
 * @exports
 */
declare const userRights: <U extends Pick<UserModel, "permissions" | "roles">>(user: U) => Right;

declare const getExtensions: (options?: Partial<StarterKitOptions>) => Extensions;

declare const lowlight: {
    highlight: (language: string, value: string, options?: Readonly<_lowlight.Options> | null | undefined) => hast.Root;
    highlightAuto: (value: string, options?: Readonly<_lowlight.AutoOptions> | null | undefined) => hast.Root;
    listLanguages: () => Array<string>;
    register: {
        (grammars: Readonly<Record<string, highlight_js.LanguageFn>>): undefined;
        (name: string, grammar: highlight_js.LanguageFn): undefined;
    };
    registerAlias: {
        (aliases: Readonly<Record<string, ReadonlyArray<string> | string>>): undefined;
        (language: string, alias: ReadonlyArray<string> | string): undefined;
    };
    registered: (aliasOrName: string) => boolean;
};

type Options = {
    src: string;
    alt?: string;
    title?: string;
    width?: number;
    height?: number;
    size?: ImageVariations;
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        CustomImage: {
            setImage: (options: Options) => ReturnType;
        };
    }
}
declare const CustomImage: _tiptap_core.Node<{
    inline: boolean;
    HTMLAttributes: {};
    sizes: ImageVariations[];
    allowBase64: boolean;
}, any>;

declare const CustomTableCell: _tiptap_core.Node<_tiptap_extension_table_cell.TableCellOptions, any>;

type Option = {
    size?: ImageVariations;
    src: string;
    aligns?: 'left' | 'center' | 'right';
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        ExternalVideo: {
            setExternalVideo: (option: Option) => ReturnType;
            deleteExternalVideo: () => ReturnType;
            setAlign: (attributes: Attrs) => ReturnType;
        };
    }
}
declare const getFormatedVideoSrc: (newVideoId: string) => string;
declare const ExternalVideo: Node<{
    inline: boolean;
    HTMLAttributes: {};
    sizes: ImageVariations[];
    aligns: string[];
}, any>;

declare const DEFAULT_LANGUAGE = "plaintext";
declare const DEFAULT_THEME = "dark";
declare const DEFAULT_TAB = 2;
interface LpiBlockOptions extends CodeBlockLowlightOptions {
    tabClassPrefix: string;
    themeClassPrefix: string;
    defaultTheme: string | null | undefined;
}
declare const CodeBlock: _tiptap_core.Node<LpiBlockOptions, any>;

declare const isOwner: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;

declare const isMember: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;

declare const canPermissionProject: (rights: Right, organizationId: OrganizationModel["id"], projectId: (ProjectModel["id"] | null) | undefined, perrmissionName: PermissionType) => boolean;
declare const canCreateProject: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditProject: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canDeleteProject: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canCreateReview: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canEditReview: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canDeleteReview: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canCreateComment: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canEditComment: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;
declare const canDeleteComment: (rights: Right, organizationId: OrganizationModel["id"], projectId: ProjectModel["id"]) => boolean;

declare const canCreateGroup: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditGroup: (rights: Right, organizationId: OrganizationModel["id"], groupId: PeopleGroupModel["id"]) => boolean;

declare const canEditUser: (rights: Right, organizationId: OrganizationModel["id"], userId: UserModel["id"]) => boolean;

declare const canCreateNews: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditNews: (rights: Right, organizationId: OrganizationModel["id"], newsId: NewsModel["id"]) => boolean;
declare const canDeleteNews: (rights: Right, organizationId: OrganizationModel["id"], newsId: NewsModel["id"]) => boolean;

declare const canCreateEvent: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditEvent: (rights: Right, organizationId: OrganizationModel["id"], eventId: EventModel["id"]) => boolean;
declare const canDeleteEvent: (rights: Right, organizationId: OrganizationModel["id"], eventId: EventModel["id"]) => boolean;

declare const canCreateInstruction: (rights: Right, organizationId: OrganizationModel["id"]) => boolean;
declare const canEditInstruction: (rights: Right, organizationId: OrganizationModel["id"], instructionId: InstructionModel["id"]) => boolean;
declare const canDeleteInstruction: (rights: Right, organizationId: OrganizationModel["id"], instructionId: InstructionModel["id"]) => boolean;

export { CodeBlock, CustomImage, CustomTableCell, DEFAULT_LANGUAGE, DEFAULT_TAB, DEFAULT_THEME, ExternalVideo, type LpiBlockOptions, canCreateComment, canCreateEvent, canCreateGroup, canCreateInstruction, canCreateNews, canCreateProject, canCreateReview, canDeleteComment, canDeleteEvent, canDeleteInstruction, canDeleteNews, canDeleteProject, canDeleteReview, canEditComment, canEditEvent, canEditGroup, canEditInstruction, canEditNews, canEditProject, canEditReview, canEditUser, canPermission, canPermissionProject, getExtensions, getFormatedVideoSrc, hasPermission, isAdmin, isAdminOrFacilitator, isFacilitator, isMember, isOwner, isSuperAdmin, isUser, isViewer, lowlight, roomKeyFromParams, userRights };
