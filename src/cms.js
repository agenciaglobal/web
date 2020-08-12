import * as CMS from "netlify-cms-app"
import "netlify-cms-widget-youtube"

// eslint-disable-next-line no-undef
CMS.registerWidget("youtube", youtubeControl, youtubePreview)
