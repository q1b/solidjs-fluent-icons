import { splitProps } from "solid-js";
function EmojiLaughIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 8.08a.5.5 0 11-1-.16c.13-.83.9-1.42 1.75-1.42s1.61.59 1.74 1.42a.5.5 0 11-.99.16c-.04-.3-.34-.58-.75-.58-.42 0-.71.28-.76.58zm5.5 0a.5.5 0 01-1-.16c.13-.83.9-1.42 1.75-1.42s1.61.59 1.74 1.42a.5.5 0 01-.99.16c-.04-.3-.34-.58-.75-.58-.42 0-.71.28-.76.58zM5.5 10.5h9c-.22 2.2-1.93 4-4.5 4a4.36 4.36 0 01-4.5-4z"/>
    </svg>);
}
export default EmojiLaughIcon;
