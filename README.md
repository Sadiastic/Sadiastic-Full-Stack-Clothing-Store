# How to Setup and Run the Project

## Prerequisites
1. **Install Node.js:**
   - Download and install Node.js from the official website: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```
2. **Install Git:**
   - Ensure Git is installed on your system: [https://git-scm.com/](https://git-scm.com/)

3. **MongoDB and Stripe:**
   - Set up a MongoDB database and Stripe account for payment processing.

---

## Steps to Run the Backend
1. Open the project folder in VS Code or any code editor.
2. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure the `.env` file:
   - Add the following variables to the `backend/.env` file:
     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
     STRIPE_SECRET_KEY=your_stripe_secret_key
     PORT=5000
     ```
   - Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB credentials.
   - Add your Stripe secret key.
5. Start the backend server:
   ```bash
   npm run server
   ```
   - The backend will run at `http://localhost:5000`.

---

## Steps to Run the Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```
4. Open the application:
   - The frontend will run at `http://localhost:5173`. Open this link in your browser.

---

## Steps to Run the Admin Panel
1. Navigate to the `admin` folder:
   ```bash
   cd admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the admin panel:
   ```bash
   npm run dev
   ```
4. Open the admin panel:
   - The admin panel will run at `http://localhost:5174`. Open this link in your browser.

---

## Notes
1. **Ensure the backend server is running** before starting the frontend or admin panel.
2. **Database Setup:**
   - MongoDB must be running, and your database should have the appropriate collections (`users`, `products`, `orders`).
3. **Stripe Payments:**
   - Payments will only work if Stripe is correctly configured in the `.env` file.
4. **Environment Variables:**
   - Ensure all required variables are correctly set in the respective `.env` files.

---

## Troubleshooting
- If you encounter any issues, check the terminal logs for errors.
- Ensure Node.js and MongoDB are correctly installed and running.
- Clear the browser cache if the frontend or admin panel fails to load.

For further assistance, feel free to reach out!

