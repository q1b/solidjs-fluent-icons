import { splitProps } from "solid-js";
function DocumentMentionIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H8.39l-.04-.18C9.95 17.63 11 16.1 11 14.5a5.5 5.5 0 00-7-5.3V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM10 14.5a4.5 4.5 0 10-3.14 4.29l.19-.06.06-.03a.54.54 0 00-.43-.99l-.14.05-.2.06a3.43 3.43 0 112.58-3.32c0 .74-.45 1.26-.9 1.26-.34 0-.54-.36-.54-1.26v-1.87a.54.54 0 00-1-.2 1.8 1.8 0 00-.98-.27c-1.22 0-1.98 1.1-1.98 2.34 0 1.25.76 2.34 1.98 2.34.55 0 1-.22 1.34-.58.26.37.66.58 1.18.58 1.09 0 1.98-1.04 1.98-2.34zm-5.4 0c0-.72.38-1.26.9-1.26s.9.54.9 1.26-.38 1.26-.9 1.26-.9-.54-.9-1.26z"/>
    </svg>);
}
export default DocumentMentionIcon;
