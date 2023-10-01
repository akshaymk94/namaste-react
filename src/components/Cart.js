const Cart = () => {
    return (
        <div className="flex flex-col w-6/12 mx-auto min-h-screen pt-8 justify-center items-center">
            <h1 id="heading" className="text-3xl mb-2">You're on Cart page</h1>
            <div>You do not have any items in cart.</div>
            <h3 className="mb-2">Start shopping!</h3>
            <button type="button" className="px-4 py-2 rounded-md bg-slate-500 w-fit">Click me</button>
        </div>
    );
}

export default Cart;