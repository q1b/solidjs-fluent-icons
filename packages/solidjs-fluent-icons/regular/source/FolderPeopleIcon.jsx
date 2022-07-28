import { splitProps } from "solid-js";
function FolderPeopleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.17 3c.27 0 .53.07.76.21l.14.09 1.6 1.2h5.83a2.5 2.5 0 012.48 2.17l.01.17L18 7v4.38c-.3-.2-.63-.33-1-.37V7c0-.78-.6-1.42-1.36-1.5H9.62L8.16 7.03a1.5 1.5 0 01-.94.46l-.15.01H3v7c0 .78.6 1.42 1.36 1.5h4.79A2.33 2.33 0 009 17H4.5A2.5 2.5 0 012 14.66V5.5A2.5 2.5 0 014.34 3h2.83zm0 1H4.5c-.78 0-1.42.6-1.5 1.36V6.5h4.07a.5.5 0 00.3-.1l.06-.06L8.7 5.02 7.47 4.1a.5.5 0 00-.22-.1h-.08zm5.58 10.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM13 19c2.14 0 3-1.1 3-2.19a1.3 1.3 0 00-1.29-1.31H11.3A1.3 1.3 0 0010 16.81c0 1.1.86 2.19 3 2.19zm3.5-.5h-.02c.35-.51.52-1.1.52-1.69 0-.48-.15-.93-.4-1.31h1.33c.6 0 1.07.5 1.07 1.13 0 .93-.71 1.87-2.5 1.87zm.25-4a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"/>
    </svg>);
}
export default FolderPeopleIcon;
