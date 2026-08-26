import { getEnv } from "../config.js";
import {
  AUTH_COOKIE_NAME,
  verifyAuthToken,
} from "../lib/auth-token.js";
import { AppError } from "../lib/http-error.js";

export const requireAuth = async (
  req,
  _res,
  next
) => {
  try {
    const token = req.cookies?.[AUTH_COOKIE_NAME];

    if (
      typeof token !== "string" ||
      token.length === 0
    ) {
      throw new AppError(
        401,
        "unauthorized",
        "Authentication required."
      );
    }

    const claims = await verifyAuthToken(token);

    const id = Number.parseInt(
      claims.sub,
      10
    );

    if (
      !Number.isInteger(id) ||
      id <= 0
    ) {
      throw new AppError(
        401,
        "unauthorized",
        "Authentication required."
      );
    }

    // Attach authenticated user to the request.
    // JavaScript does not require Express Request
    // interface augmentation.
    req.user = {
      id,
      email: claims.email,
    };

    next();
  } catch (err) {
    if (err instanceof AppError) {
      next(err);
      return;
    }

    // Invalid, expired, or tampered tokens should
    // look exactly like a missing authentication token.
    next(
      new AppError(
        401,
        "unauthorized",
        "Authentication required."
      )
    );
  }
};

export function authCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: getEnv().NODE_ENV === "production",
    path: "/",
    maxAge: 8 * 60 * 60 * 1000,
  };
}