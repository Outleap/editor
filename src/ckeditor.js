/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Gallery from 'outleap-ckeditor5-gallery/src/gallery';
import '@ckeditor/ckeditor5-build-classic/build/translations/de.js';

class Editor extends BalloonEditorBase {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	SimpleUploadAdapter,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageResize,
	ImageUpload,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	TextTransformation,
	Heading,
	HeadingButtonsUI,
	RemoveFormat,
	BlockToolbar,
	Table,
	TableToolbar,
	SelectAll,
	CodeBlock,
	MediaEmbed,
	PageBreak,
	Gallery
];

// Editor configuration.
Editor.defaultConfig = {
	language: 'en'
};

export default Editor;
