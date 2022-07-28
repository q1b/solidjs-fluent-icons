import { splitProps } from "solid-js";
function CommentMentionIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15 2a3 3 0 101.28 5.71.5.5 0 01.44.9A4 4 0 1119 5v.51a1.5 1.5 0 01-2.65.97A2 2 0 0113 5a2 2 0 013.04-1.7.5.5 0 01.96.2v2a.5.5 0 101 0V5a3 3 0 00-3-3zm-1 3a1 1 0 102 0 1 1 0 00-2 0zm1 5c1.13 0 2.16-.37 3-1v3.28a2.58 2.58 0 01-2.6 2.56h-4.59L6.8 17.8a1 1 0 01-1.4-.2.98.98 0 01-.2-.59v-2.17h-.6A2.58 2.58 0 012 12.28V5.57A2.58 2.58 0 014.6 3h5.82A4.98 4.98 0 0015 10z"/>
    </svg>);
}
export default CommentMentionIcon;
