import { splitProps } from "solid-js";
function CommentArrowLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M19 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM10.5 6a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L15.29 6H10.5zm3 7c1.75 0 3.33-.69 4.5-1.81v1.09a2.58 2.58 0 01-2.6 2.56h-4.59L6.8 17.8a1 1 0 01-1.4-.2.98.98 0 01-.2-.59v-2.17h-.6A2.58 2.58 0 012 12.28V5.57A2.58 2.58 0 014.6 3h3.42a6.5 6.5 0 005.48 10z"/>
    </svg>);
}
export default CommentArrowLeftIcon;
