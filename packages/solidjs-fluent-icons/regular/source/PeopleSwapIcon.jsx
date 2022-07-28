import { splitProps } from "solid-js";
function PeopleSwapIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.75 4.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM3.5 6.75a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0zm7.85 4.78A2 2 0 0010 11H3.5a2 2 0 00-2 2V13.08a1.72 1.72 0 00.01.18 3.95 3.95 0 00.67 1.8C2.88 16.09 4.24 17 6.75 17c1.48 0 2.56-.32 3.34-.79l-.65-.65a1.53 1.53 0 01-.08-.09c-.6.31-1.44.53-2.61.53-2.24 0-3.26-.8-3.74-1.5a2.95 2.95 0 01-.5-1.42l-.01-.02V13a1 1 0 011-1H10a1 1 0 01.64.23l.71-.7zM14.5 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM12 7.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm.85 5.35a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L11.71 15h5.58l-1.14 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7L17.29 14h-5.58l1.14-1.15z"/>
    </svg>);
}
export default PeopleSwapIcon;
