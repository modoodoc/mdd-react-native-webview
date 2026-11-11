import { Component } from 'react';
import { IOSWebViewProps, AndroidWebViewProps, WindowsWebViewProps } from './lib/WebViewTypes';

export { FileDownload, WebViewMessageEvent, WebViewNavigation } from './lib/WebViewTypes';

export type WebViewProps = IOSWebViewProps & AndroidWebViewProps & WindowsWebViewProps;

// upstream 14.x에서 기본값이 undefined로 바뀌어 props가 never가 되는 버그가 있어 {}로 되돌린다(17.x에서 수정됨).
// eslint-disable-next-line @typescript-eslint/ban-types
declare class WebView<P = {}> extends Component<WebViewProps & P> {
  /**
   * Go back one page in the webview's history.
   */
  goBack: () => void;

  /**
   * Go forward one page in the webview's history.
   */
  goForward: () => void;

  /**
   * Reloads the current page.
   */
  reload: () => void;

  /**
   * Stop loading the current page.
   */
  stopLoading(): void;

  /**
   * Executes the JavaScript string.
   */
  injectJavaScript: (script: string) => void;

  /**
   * Focuses on WebView rendered page.
   */
  requestFocus: () => void;

  /**
   * Posts a message to WebView.
   */
  postMessage: (message: string) => void;

  /**
   * (Android only)
   * Removes the autocomplete popup from the currently focused form field, if present.
   */
  clearFormData?: () => void;

  /**
   * Clears the resource cache. Note that the cache is per-application, so this will clear the cache for all WebViews used.
   */
  clearCache: (includeDiskFiles: boolean) => void;

  /**
   * (Android only)
   * Tells this WebView to clear its internal back/forward list.
   */
  clearHistory?: () => void;
}

export { WebView };
export default WebView;
