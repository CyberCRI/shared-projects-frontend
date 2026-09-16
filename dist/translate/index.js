// src/translate/utils.ts
var getTranslatableField = (entity, field, locale) => {
  const isNotTranslated = !entity[`${field.toString()}_detected_language`];
  const isDetectectedLanguage = locale == entity[`${field.toString()}_detected_language`];
  if (locale === null || isDetectectedLanguage || isNotTranslated) {
    return entity[field.toString()] || "";
  } else {
    return entity[`${field.toString()}_${locale}`] || entity[field.toString()] || "";
  }
};
var getTranslatableFields = (entity, fields, locale) => {
  return fields.reduce(
    (prev, field) => {
      prev[field] = getTranslatableField(entity, field, locale);
      return prev;
    },
    {}
  );
};
var translateEntity = (entity, fields, locale) => {
  if (!entity) {
    return entity;
  }
  return {
    ...entity,
    $t: getTranslatableFields(entity, fields, locale)
  };
};
var translateMany = (func, datas, locale) => {
  if (!datas) {
    return [];
  }
  return datas.map((data) => func(data, locale));
};

// src/translate/translateTag.ts
var translateTag = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "description"], locale);
};

// src/translate/translateCategory.ts
var translateCategory = (data, locale) => {
  if (!data) {
    return data;
  }
  const translate = translateEntity(
    data,
    ["name", "description"],
    locale
  );
  if (translate.children) {
    translate.children = translateMany(translateCategory, translate.children, locale);
  }
  if (translate.hierarchy) {
    translate.hierarchy = translateMany(translateCategory, translate.hierarchy, locale);
  }
  if (translate.tags) {
    translate.tags = translateMany(translateTag, translate.tags, locale);
  }
  return translate;
};

// src/translate/translateTemplate.ts
var translateTemplate = (data, locale) => {
  if (!data) {
    return data;
  }
  const translated = translateEntity(
    data,
    [
      "name",
      "description",
      "project_title",
      "project_description",
      "project_purpose",
      "blogentry_title",
      "blogentry_content",
      "goal_title",
      "goal_description",
      "comment_content"
    ],
    locale
  );
  if (data.project_tags) {
    translated.project_tags = translateMany(translateTag, data.project_tags, locale);
  }
  if (data.categories) {
    translated.categories = translateMany(translateCategory, data.categories, locale);
  }
  return translated;
};

// src/translate/translateProject.ts
var translateProject = (data, locale) => {
  if (!data) {
    return data;
  }
  const translated = translateEntity(
    data,
    ["description", "title", "purpose"],
    locale
  );
  if (data.template) {
    translated.template = translateTemplate(data.template, locale);
  }
  if (data.categories) {
    translated.categories = translateMany(translateCategory, data.categories, locale);
  }
  if (data.tags) {
    translated.tags = translateMany(translateTag, data.tags, locale);
  }
  return translated;
};

// src/translate/translateAnnouncement.ts
var translateAnnouncement = (data, locale) => {
  if (!data) {
    return data;
  }
  const translated = translateEntity(data, ["description", "title"], locale);
  if (data.project) {
    translated.project = translateProject(data.project, locale);
  }
  return translated;
};

// src/translate/translateBlogEntry.ts
var translateBlogEntry = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "content"], locale);
};

// src/translate/translateClassification.ts
var translateClassification = (data, locale) => {
  if (!data) {
    return data;
  }
  const translate = translateEntity(
    data,
    ["title", "description"],
    locale
  );
  if (data.tags) {
    translate.tags = translateMany(translateTag, data.tags, locale);
  }
  return translate;
};

// src/translate/translateComment.ts
var translateComment = (data, locale) => {
  if (!data) {
    return data;
  }
  const translate = translateEntity(data, ["content"], locale);
  if (data.replies) {
    translate.replies = translateMany(translateComment, data.replies, locale);
  }
  return translate;
};

// src/translate/translateLocation.ts
var translateLocation = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "description"], locale);
};

// src/translate/translateEvent.ts
var translateEvent = (data, locale) => {
  if (!data) {
    return data;
  }
  const translate = translateEntity(data, ["title", "content"], locale);
  if (translate.location) {
    translate.location = translateLocation(translate.location, locale);
  }
  return translate;
};

// src/translate/translateEventsLocation.ts
var translateEventsLocation = (data, locale) => {
  if (!data) {
    return data;
  }
  const translate = translateLocation(data, locale);
  if (translate.event) {
    translate.event = translateEvent(translate.event, locale);
  }
  return translate;
};

// src/translate/translateFile.ts
var translateFile = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "description"], locale);
};

// src/translate/translateGoal.ts
var translateGoal = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "description"], locale);
};

// src/translate/translateGroup.ts
var translateGroup = (data, locale) => {
  if (!data) {
    return data;
  }
  const translated = translateEntity(
    data,
    ["name", "description", "short_description"],
    locale
  );
  if (data.locations) {
    data.locations = translateMany(translateLocation, data.locations, locale);
  }
  return translated;
};

// src/translate/translateInstruction.ts
var translateInstruction = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["content", "title"], locale);
};

// src/translate/translateLink.ts
var translateLink = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "description"], locale);
};

// src/translate/translateOneNews.ts
var translateOneNews = (data, locale) => {
  if (!data) {
    return data;
  }
  const translated = translateEntity(data, ["content", "title"], locale);
  if (translated.location) {
    translated.location = translateLocation(translated.location, locale);
  }
  return translated;
};

// src/translate/translateNewsfeed.ts
var translateNewsFeed = (datas, locale) => {
  if (!datas) {
    return datas;
  }
  return datas.map((data) => {
    const translate = { ...data };
    if (data.project !== void 0) {
      translate.project = translateProject(data.project, locale);
    }
    if (data.news) {
      translate.news = translateOneNews(data.news, locale);
    }
    if (data.announcement) {
      translate.announcement = translateAnnouncement(data.announcement, locale);
    }
    return translate;
  });
};

// src/translate/translateOneNewsLocation.ts
var translateOneNewsLocation = (data, locale) => {
  if (!data) {
    return data;
  }
  const translate = translateLocation(data, locale);
  if (translate.news) {
    translate.news = translateOneNews(translate.news, locale);
  }
  return translate;
};

// src/translate/translateOrganization.ts
var translateTermsAdnCondition = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["displayed_content"], locale);
};
var translateOrganization = (data, locale) => {
  if (!data) {
    return data;
  }
  const translate = translateEntity(
    data,
    ["name", "dashboard_title", "dashboard_subtitle", "description", "chat_button_text"],
    locale
  );
  if (data.terms_and_conditions) {
    translate.terms_and_conditions = translateTermsAdnCondition(data.terms_and_conditions, locale);
  }
  return translate;
};

// src/translate/translatePeopleGroupLocation.ts
var translatePeopleGroupLocation = (data, locale) => {
  if (!data) {
    return data;
  }
  const translate = translateEntity(data, ["title", "description"], locale);
  if (translate.project) {
    translate.project = translateProject(translate.project, locale);
  }
  return translate;
};

// src/translate/translateProjectLocation.ts
var translateProjectLocation = (data, locale) => {
  if (!data) {
    return data;
  }
  const translated = translateLocation(data, locale);
  if (data.project) {
    translated.project = translateProject(data.project, locale);
  }
  return translated;
};

// src/translate/translateProjectMessage.ts
var translateProjectMessage = (data, locale) => {
  if (!data) {
    return data;
  }
  const translated = translateEntity(data, ["content"], locale);
  if (data.replies) {
    translated.replies = translateMany(translateProjectMessage, data.replies, locale);
  }
  return translated;
};

// src/translate/translateProjectTab.ts
var translateProjectTab = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "description"], locale);
};

// src/translate/translateProjectTabItem.ts
var translateProjectTabItem = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "content"], locale);
};

// src/translate/translateResearcherDocument.ts
var translateResearcherDocument = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "description"], locale);
};

// src/translate/translateReview.ts
var translateReview = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(data, ["title", "description"], locale);
};

// src/translate/translateSkill.ts
var translateSkill = (data, locale) => {
  if (!data) {
    return data;
  }
  return {
    ...data,
    tag: translateTag(data.tag, locale)
  };
};

// src/translate/translateUser.ts
var translateUser = (data, locale) => {
  if (!data) {
    return data;
  }
  return translateEntity(
    data,
    ["description", "job", "short_description"],
    locale
  );
};

// src/translate/translatedProjectLinked.ts
var translatedProjectLinked = (data, locale) => {
  if (!data) {
    return data;
  }
  const translated = { ...data };
  if (data.project) {
    translated.project = translateProject(data.project, locale);
  }
  if (data.target) {
    translated.project = translateProject(data.target, locale);
  }
  return translated;
};
export {
  getTranslatableField,
  getTranslatableFields,
  translateAnnouncement,
  translateBlogEntry,
  translateCategory,
  translateClassification,
  translateComment,
  translateEntity,
  translateEvent,
  translateEventsLocation,
  translateFile,
  translateGoal,
  translateGroup,
  translateInstruction,
  translateLink,
  translateLocation,
  translateMany,
  translateNewsFeed,
  translateOneNews,
  translateOneNewsLocation,
  translateOrganization,
  translatePeopleGroupLocation,
  translateProject,
  translateProjectLocation,
  translateProjectMessage,
  translateProjectTab,
  translateProjectTabItem,
  translateResearcherDocument,
  translateReview,
  translateSkill,
  translateTag,
  translateTemplate,
  translateTermsAdnCondition,
  translateUser,
  translatedProjectLinked
};
//# sourceMappingURL=index.js.map