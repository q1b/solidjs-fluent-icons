import { splitProps } from "solid-js";
function MailCopyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 12.5V6.37l6.75 3.56c.15.1.35.1.5 0L18 6.37v6.13a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 014 12.5zm.02-7.28A2.5 2.5 0 016.5 3h9a2.5 2.5 0 012.48 2.22L11 8.92l-6.98-3.7zM13.5 17c.82 0 1.54-.4 2-1h-9A3.5 3.5 0 013 12.5v-7c-.6.46-1 1.18-1 2v5A4.5 4.5 0 006.5 17h7z"/>
    </svg>);
}
export default MailCopyIcon;
