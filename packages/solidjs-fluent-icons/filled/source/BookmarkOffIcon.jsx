import { splitProps } from "solid-js";
function BookmarkOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 16.7l1.15 1.15a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7L4 4.71V17.5a.5.5 0 00.8.4l5.2-3.78 5.2 3.78a.5.5 0 00.8-.4v-.8zm0-12.2v9.38L4.8 2.68A2.5 2.5 0 016.5 2h7A2.5 2.5 0 0116 4.5z"/>
    </svg>);
}
export default BookmarkOffIcon;
