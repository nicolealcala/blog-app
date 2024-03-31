export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({ auth, request }) {
            const user = auth?.user;

            const onAdminPage = request.nextUrl?.pathname.startsWith("/admin");
            const onBlogPage = request.nextUrl?.pathname.startsWith("/blogs");
            const onLoginPage = request.nextUrl?.pathname.startsWith("/login");

            if (onAdminPage && !user.isAdmin) return false;
            if (onBlogPage && !user) return false;
            if (onLoginPage && user) return Response.redirect(new URL("/", request.nextUrl));
            return true;
        }
    }
}