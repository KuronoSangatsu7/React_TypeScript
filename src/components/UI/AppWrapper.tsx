type propsType = {
    children: React.ReactNode
}

const AppWrapper = (props: propsType) => {
    return <div className="flex flex-col container mx-auto w-3/5 items-center py-24 px-4">{props.children}</div>
}

export default AppWrapper