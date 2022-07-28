import { splitProps } from "solid-js";
function PeopleCommunityIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.88 7.5a2.74 2.74 0 114.24 3.49A2.74 2.74 0 017.88 7.5zm5.87 1.75c0-.63-.16-1.23-.43-1.75h4.18c.83 0 1.5.67 1.5 1.5v.5c0 1.59-1.2 3.21-3.31 3.78A2.5 2.5 0 0013.5 12h-.95a3.74 3.74 0 001.2-2.75zM13.5 13a1.5 1.5 0 011.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5A1.5 1.5 0 016.5 13h7zM1 9.5c0 1.59 1.2 3.21 3.31 3.78A2.5 2.5 0 016.5 12h.95a3.74 3.74 0 01-.77-4.5H2.5C1.67 7.5 1 8.17 1 9v.5zm7.75-5.75a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0zm8 0a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0z"/>
    </svg>);
}
export default PeopleCommunityIcon;
