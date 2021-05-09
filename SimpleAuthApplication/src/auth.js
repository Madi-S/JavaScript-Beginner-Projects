export function getAuthForm() {
    return `
    <form class="mui-form" id="authForm">
        <div class="mui-textfield mui-textfield--float-label">
            <input type="text" id="username" required>
            <label for="username">Username</label>
        </div>
        
        <div class="mui-textfield mui-textfield--float-label">
            <input type="text" id="password" required>
            <label for="username">Password</label>
        </div>

        <button
            id="submitAuthBtn"
            type="submit"
            class="mui-btn mui-btn--raised mui-btn--primary"
            disabled
             >
            Submit
        </button>
    </form>
    `
}