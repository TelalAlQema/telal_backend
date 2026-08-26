
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model contactcontact
 * 
 */
export type contactcontact = $Result.DefaultSelection<Prisma.$contactcontactPayload>
/**
 * Model freequote
 * 
 */
export type freequote = $Result.DefaultSelection<Prisma.$freequotePayload>
/**
 * Model indexcontact
 * 
 */
export type indexcontact = $Result.DefaultSelection<Prisma.$indexcontactPayload>
/**
 * Model Login
 * 
 */
export type Login = $Result.DefaultSelection<Prisma.$LoginPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubmissionSource: {
  QUOTE: 'QUOTE',
  CONTACT: 'CONTACT',
  INDEX_CONTACT: 'INDEX_CONTACT'
};

export type SubmissionSource = (typeof SubmissionSource)[keyof typeof SubmissionSource]

}

export type SubmissionSource = $Enums.SubmissionSource

export const SubmissionSource: typeof $Enums.SubmissionSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Contactcontacts
 * const contactcontacts = await prisma.contactcontact.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Contactcontacts
   * const contactcontacts = await prisma.contactcontact.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.contactcontact`: Exposes CRUD operations for the **contactcontact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactcontacts
    * const contactcontacts = await prisma.contactcontact.findMany()
    * ```
    */
  get contactcontact(): Prisma.contactcontactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.freequote`: Exposes CRUD operations for the **freequote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Freequotes
    * const freequotes = await prisma.freequote.findMany()
    * ```
    */
  get freequote(): Prisma.freequoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.indexcontact`: Exposes CRUD operations for the **indexcontact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Indexcontacts
    * const indexcontacts = await prisma.indexcontact.findMany()
    * ```
    */
  get indexcontact(): Prisma.indexcontactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.login`: Exposes CRUD operations for the **Login** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logins
    * const logins = await prisma.login.findMany()
    * ```
    */
  get login(): Prisma.LoginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    contactcontact: 'contactcontact',
    freequote: 'freequote',
    indexcontact: 'indexcontact',
    Login: 'Login',
    AdminUser: 'AdminUser',
    Submission: 'Submission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "contactcontact" | "freequote" | "indexcontact" | "login" | "adminUser" | "submission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      contactcontact: {
        payload: Prisma.$contactcontactPayload<ExtArgs>
        fields: Prisma.contactcontactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactcontactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactcontactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactcontactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactcontactPayload>
          }
          findFirst: {
            args: Prisma.contactcontactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactcontactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactcontactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactcontactPayload>
          }
          findMany: {
            args: Prisma.contactcontactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactcontactPayload>[]
          }
          create: {
            args: Prisma.contactcontactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactcontactPayload>
          }
          createMany: {
            args: Prisma.contactcontactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contactcontactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactcontactPayload>
          }
          update: {
            args: Prisma.contactcontactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactcontactPayload>
          }
          deleteMany: {
            args: Prisma.contactcontactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactcontactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contactcontactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactcontactPayload>
          }
          aggregate: {
            args: Prisma.ContactcontactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactcontact>
          }
          groupBy: {
            args: Prisma.contactcontactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactcontactGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactcontactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactcontactCountAggregateOutputType> | number
          }
        }
      }
      freequote: {
        payload: Prisma.$freequotePayload<ExtArgs>
        fields: Prisma.freequoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.freequoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freequotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.freequoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freequotePayload>
          }
          findFirst: {
            args: Prisma.freequoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freequotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.freequoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freequotePayload>
          }
          findMany: {
            args: Prisma.freequoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freequotePayload>[]
          }
          create: {
            args: Prisma.freequoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freequotePayload>
          }
          createMany: {
            args: Prisma.freequoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.freequoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freequotePayload>
          }
          update: {
            args: Prisma.freequoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freequotePayload>
          }
          deleteMany: {
            args: Prisma.freequoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.freequoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.freequoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$freequotePayload>
          }
          aggregate: {
            args: Prisma.FreequoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFreequote>
          }
          groupBy: {
            args: Prisma.freequoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FreequoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.freequoteCountArgs<ExtArgs>
            result: $Utils.Optional<FreequoteCountAggregateOutputType> | number
          }
        }
      }
      indexcontact: {
        payload: Prisma.$indexcontactPayload<ExtArgs>
        fields: Prisma.indexcontactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.indexcontactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indexcontactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.indexcontactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indexcontactPayload>
          }
          findFirst: {
            args: Prisma.indexcontactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indexcontactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.indexcontactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indexcontactPayload>
          }
          findMany: {
            args: Prisma.indexcontactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indexcontactPayload>[]
          }
          create: {
            args: Prisma.indexcontactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indexcontactPayload>
          }
          createMany: {
            args: Prisma.indexcontactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.indexcontactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indexcontactPayload>
          }
          update: {
            args: Prisma.indexcontactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indexcontactPayload>
          }
          deleteMany: {
            args: Prisma.indexcontactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.indexcontactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.indexcontactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$indexcontactPayload>
          }
          aggregate: {
            args: Prisma.IndexcontactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIndexcontact>
          }
          groupBy: {
            args: Prisma.indexcontactGroupByArgs<ExtArgs>
            result: $Utils.Optional<IndexcontactGroupByOutputType>[]
          }
          count: {
            args: Prisma.indexcontactCountArgs<ExtArgs>
            result: $Utils.Optional<IndexcontactCountAggregateOutputType> | number
          }
        }
      }
      Login: {
        payload: Prisma.$LoginPayload<ExtArgs>
        fields: Prisma.LoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          findFirst: {
            args: Prisma.LoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          findMany: {
            args: Prisma.LoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>[]
          }
          create: {
            args: Prisma.LoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          createMany: {
            args: Prisma.LoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          update: {
            args: Prisma.LoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          deleteMany: {
            args: Prisma.LoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          aggregate: {
            args: Prisma.LoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogin>
          }
          groupBy: {
            args: Prisma.LoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginCountArgs<ExtArgs>
            result: $Utils.Optional<LoginCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    contactcontact?: contactcontactOmit
    freequote?: freequoteOmit
    indexcontact?: indexcontactOmit
    login?: LoginOmit
    adminUser?: AdminUserOmit
    submission?: SubmissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model contactcontact
   */

  export type AggregateContactcontact = {
    _count: ContactcontactCountAggregateOutputType | null
    _avg: ContactcontactAvgAggregateOutputType | null
    _sum: ContactcontactSumAggregateOutputType | null
    _min: ContactcontactMinAggregateOutputType | null
    _max: ContactcontactMaxAggregateOutputType | null
  }

  export type ContactcontactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactcontactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactcontactMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    services: string | null
    comment: string | null
    date: string | null
    time: string | null
  }

  export type ContactcontactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    services: string | null
    comment: string | null
    date: string | null
    time: string | null
  }

  export type ContactcontactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    services: number
    comment: number
    date: number
    time: number
    _all: number
  }


  export type ContactcontactAvgAggregateInputType = {
    id?: true
  }

  export type ContactcontactSumAggregateInputType = {
    id?: true
  }

  export type ContactcontactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    comment?: true
    date?: true
    time?: true
  }

  export type ContactcontactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    comment?: true
    date?: true
    time?: true
  }

  export type ContactcontactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    comment?: true
    date?: true
    time?: true
    _all?: true
  }

  export type ContactcontactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactcontact to aggregate.
     */
    where?: contactcontactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactcontacts to fetch.
     */
    orderBy?: contactcontactOrderByWithRelationInput | contactcontactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactcontactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactcontacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactcontacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contactcontacts
    **/
    _count?: true | ContactcontactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactcontactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactcontactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactcontactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactcontactMaxAggregateInputType
  }

  export type GetContactcontactAggregateType<T extends ContactcontactAggregateArgs> = {
        [P in keyof T & keyof AggregateContactcontact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactcontact[P]>
      : GetScalarType<T[P], AggregateContactcontact[P]>
  }




  export type contactcontactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactcontactWhereInput
    orderBy?: contactcontactOrderByWithAggregationInput | contactcontactOrderByWithAggregationInput[]
    by: ContactcontactScalarFieldEnum[] | ContactcontactScalarFieldEnum
    having?: contactcontactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactcontactCountAggregateInputType | true
    _avg?: ContactcontactAvgAggregateInputType
    _sum?: ContactcontactSumAggregateInputType
    _min?: ContactcontactMinAggregateInputType
    _max?: ContactcontactMaxAggregateInputType
  }

  export type ContactcontactGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    services: string
    comment: string
    date: string
    time: string
    _count: ContactcontactCountAggregateOutputType | null
    _avg: ContactcontactAvgAggregateOutputType | null
    _sum: ContactcontactSumAggregateOutputType | null
    _min: ContactcontactMinAggregateOutputType | null
    _max: ContactcontactMaxAggregateOutputType | null
  }

  type GetContactcontactGroupByPayload<T extends contactcontactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactcontactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactcontactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactcontactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactcontactGroupByOutputType[P]>
        }
      >
    >


  export type contactcontactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    services?: boolean
    comment?: boolean
    date?: boolean
    time?: boolean
  }, ExtArgs["result"]["contactcontact"]>



  export type contactcontactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    services?: boolean
    comment?: boolean
    date?: boolean
    time?: boolean
  }

  export type contactcontactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "services" | "comment" | "date" | "time", ExtArgs["result"]["contactcontact"]>

  export type $contactcontactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contactcontact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      services: string
      comment: string
      date: string
      time: string
    }, ExtArgs["result"]["contactcontact"]>
    composites: {}
  }

  type contactcontactGetPayload<S extends boolean | null | undefined | contactcontactDefaultArgs> = $Result.GetResult<Prisma.$contactcontactPayload, S>

  type contactcontactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactcontactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactcontactCountAggregateInputType | true
    }

  export interface contactcontactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contactcontact'], meta: { name: 'contactcontact' } }
    /**
     * Find zero or one Contactcontact that matches the filter.
     * @param {contactcontactFindUniqueArgs} args - Arguments to find a Contactcontact
     * @example
     * // Get one Contactcontact
     * const contactcontact = await prisma.contactcontact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactcontactFindUniqueArgs>(args: SelectSubset<T, contactcontactFindUniqueArgs<ExtArgs>>): Prisma__contactcontactClient<$Result.GetResult<Prisma.$contactcontactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contactcontact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactcontactFindUniqueOrThrowArgs} args - Arguments to find a Contactcontact
     * @example
     * // Get one Contactcontact
     * const contactcontact = await prisma.contactcontact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactcontactFindUniqueOrThrowArgs>(args: SelectSubset<T, contactcontactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactcontactClient<$Result.GetResult<Prisma.$contactcontactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contactcontact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactcontactFindFirstArgs} args - Arguments to find a Contactcontact
     * @example
     * // Get one Contactcontact
     * const contactcontact = await prisma.contactcontact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactcontactFindFirstArgs>(args?: SelectSubset<T, contactcontactFindFirstArgs<ExtArgs>>): Prisma__contactcontactClient<$Result.GetResult<Prisma.$contactcontactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contactcontact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactcontactFindFirstOrThrowArgs} args - Arguments to find a Contactcontact
     * @example
     * // Get one Contactcontact
     * const contactcontact = await prisma.contactcontact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactcontactFindFirstOrThrowArgs>(args?: SelectSubset<T, contactcontactFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactcontactClient<$Result.GetResult<Prisma.$contactcontactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contactcontacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactcontactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactcontacts
     * const contactcontacts = await prisma.contactcontact.findMany()
     * 
     * // Get first 10 Contactcontacts
     * const contactcontacts = await prisma.contactcontact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactcontactWithIdOnly = await prisma.contactcontact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactcontactFindManyArgs>(args?: SelectSubset<T, contactcontactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactcontactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contactcontact.
     * @param {contactcontactCreateArgs} args - Arguments to create a Contactcontact.
     * @example
     * // Create one Contactcontact
     * const Contactcontact = await prisma.contactcontact.create({
     *   data: {
     *     // ... data to create a Contactcontact
     *   }
     * })
     * 
     */
    create<T extends contactcontactCreateArgs>(args: SelectSubset<T, contactcontactCreateArgs<ExtArgs>>): Prisma__contactcontactClient<$Result.GetResult<Prisma.$contactcontactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contactcontacts.
     * @param {contactcontactCreateManyArgs} args - Arguments to create many Contactcontacts.
     * @example
     * // Create many Contactcontacts
     * const contactcontact = await prisma.contactcontact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactcontactCreateManyArgs>(args?: SelectSubset<T, contactcontactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contactcontact.
     * @param {contactcontactDeleteArgs} args - Arguments to delete one Contactcontact.
     * @example
     * // Delete one Contactcontact
     * const Contactcontact = await prisma.contactcontact.delete({
     *   where: {
     *     // ... filter to delete one Contactcontact
     *   }
     * })
     * 
     */
    delete<T extends contactcontactDeleteArgs>(args: SelectSubset<T, contactcontactDeleteArgs<ExtArgs>>): Prisma__contactcontactClient<$Result.GetResult<Prisma.$contactcontactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contactcontact.
     * @param {contactcontactUpdateArgs} args - Arguments to update one Contactcontact.
     * @example
     * // Update one Contactcontact
     * const contactcontact = await prisma.contactcontact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactcontactUpdateArgs>(args: SelectSubset<T, contactcontactUpdateArgs<ExtArgs>>): Prisma__contactcontactClient<$Result.GetResult<Prisma.$contactcontactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contactcontacts.
     * @param {contactcontactDeleteManyArgs} args - Arguments to filter Contactcontacts to delete.
     * @example
     * // Delete a few Contactcontacts
     * const { count } = await prisma.contactcontact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactcontactDeleteManyArgs>(args?: SelectSubset<T, contactcontactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactcontacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactcontactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactcontacts
     * const contactcontact = await prisma.contactcontact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactcontactUpdateManyArgs>(args: SelectSubset<T, contactcontactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contactcontact.
     * @param {contactcontactUpsertArgs} args - Arguments to update or create a Contactcontact.
     * @example
     * // Update or create a Contactcontact
     * const contactcontact = await prisma.contactcontact.upsert({
     *   create: {
     *     // ... data to create a Contactcontact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contactcontact we want to update
     *   }
     * })
     */
    upsert<T extends contactcontactUpsertArgs>(args: SelectSubset<T, contactcontactUpsertArgs<ExtArgs>>): Prisma__contactcontactClient<$Result.GetResult<Prisma.$contactcontactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contactcontacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactcontactCountArgs} args - Arguments to filter Contactcontacts to count.
     * @example
     * // Count the number of Contactcontacts
     * const count = await prisma.contactcontact.count({
     *   where: {
     *     // ... the filter for the Contactcontacts we want to count
     *   }
     * })
    **/
    count<T extends contactcontactCountArgs>(
      args?: Subset<T, contactcontactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactcontactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contactcontact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactcontactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactcontactAggregateArgs>(args: Subset<T, ContactcontactAggregateArgs>): Prisma.PrismaPromise<GetContactcontactAggregateType<T>>

    /**
     * Group by Contactcontact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactcontactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contactcontactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactcontactGroupByArgs['orderBy'] }
        : { orderBy?: contactcontactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactcontactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactcontactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contactcontact model
   */
  readonly fields: contactcontactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contactcontact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactcontactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contactcontact model
   */
  interface contactcontactFieldRefs {
    readonly id: FieldRef<"contactcontact", 'Int'>
    readonly name: FieldRef<"contactcontact", 'String'>
    readonly email: FieldRef<"contactcontact", 'String'>
    readonly phone: FieldRef<"contactcontact", 'String'>
    readonly services: FieldRef<"contactcontact", 'String'>
    readonly comment: FieldRef<"contactcontact", 'String'>
    readonly date: FieldRef<"contactcontact", 'String'>
    readonly time: FieldRef<"contactcontact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contactcontact findUnique
   */
  export type contactcontactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
    /**
     * Filter, which contactcontact to fetch.
     */
    where: contactcontactWhereUniqueInput
  }

  /**
   * contactcontact findUniqueOrThrow
   */
  export type contactcontactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
    /**
     * Filter, which contactcontact to fetch.
     */
    where: contactcontactWhereUniqueInput
  }

  /**
   * contactcontact findFirst
   */
  export type contactcontactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
    /**
     * Filter, which contactcontact to fetch.
     */
    where?: contactcontactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactcontacts to fetch.
     */
    orderBy?: contactcontactOrderByWithRelationInput | contactcontactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactcontacts.
     */
    cursor?: contactcontactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactcontacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactcontacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactcontacts.
     */
    distinct?: ContactcontactScalarFieldEnum | ContactcontactScalarFieldEnum[]
  }

  /**
   * contactcontact findFirstOrThrow
   */
  export type contactcontactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
    /**
     * Filter, which contactcontact to fetch.
     */
    where?: contactcontactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactcontacts to fetch.
     */
    orderBy?: contactcontactOrderByWithRelationInput | contactcontactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactcontacts.
     */
    cursor?: contactcontactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactcontacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactcontacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactcontacts.
     */
    distinct?: ContactcontactScalarFieldEnum | ContactcontactScalarFieldEnum[]
  }

  /**
   * contactcontact findMany
   */
  export type contactcontactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
    /**
     * Filter, which contactcontacts to fetch.
     */
    where?: contactcontactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactcontacts to fetch.
     */
    orderBy?: contactcontactOrderByWithRelationInput | contactcontactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contactcontacts.
     */
    cursor?: contactcontactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactcontacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactcontacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactcontacts.
     */
    distinct?: ContactcontactScalarFieldEnum | ContactcontactScalarFieldEnum[]
  }

  /**
   * contactcontact create
   */
  export type contactcontactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
    /**
     * The data needed to create a contactcontact.
     */
    data: XOR<contactcontactCreateInput, contactcontactUncheckedCreateInput>
  }

  /**
   * contactcontact createMany
   */
  export type contactcontactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contactcontacts.
     */
    data: contactcontactCreateManyInput | contactcontactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contactcontact update
   */
  export type contactcontactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
    /**
     * The data needed to update a contactcontact.
     */
    data: XOR<contactcontactUpdateInput, contactcontactUncheckedUpdateInput>
    /**
     * Choose, which contactcontact to update.
     */
    where: contactcontactWhereUniqueInput
  }

  /**
   * contactcontact updateMany
   */
  export type contactcontactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contactcontacts.
     */
    data: XOR<contactcontactUpdateManyMutationInput, contactcontactUncheckedUpdateManyInput>
    /**
     * Filter which contactcontacts to update
     */
    where?: contactcontactWhereInput
    /**
     * Limit how many contactcontacts to update.
     */
    limit?: number
  }

  /**
   * contactcontact upsert
   */
  export type contactcontactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
    /**
     * The filter to search for the contactcontact to update in case it exists.
     */
    where: contactcontactWhereUniqueInput
    /**
     * In case the contactcontact found by the `where` argument doesn't exist, create a new contactcontact with this data.
     */
    create: XOR<contactcontactCreateInput, contactcontactUncheckedCreateInput>
    /**
     * In case the contactcontact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactcontactUpdateInput, contactcontactUncheckedUpdateInput>
  }

  /**
   * contactcontact delete
   */
  export type contactcontactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
    /**
     * Filter which contactcontact to delete.
     */
    where: contactcontactWhereUniqueInput
  }

  /**
   * contactcontact deleteMany
   */
  export type contactcontactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactcontacts to delete
     */
    where?: contactcontactWhereInput
    /**
     * Limit how many contactcontacts to delete.
     */
    limit?: number
  }

  /**
   * contactcontact without action
   */
  export type contactcontactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contactcontact
     */
    select?: contactcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contactcontact
     */
    omit?: contactcontactOmit<ExtArgs> | null
  }


  /**
   * Model freequote
   */

  export type AggregateFreequote = {
    _count: FreequoteCountAggregateOutputType | null
    _avg: FreequoteAvgAggregateOutputType | null
    _sum: FreequoteSumAggregateOutputType | null
    _min: FreequoteMinAggregateOutputType | null
    _max: FreequoteMaxAggregateOutputType | null
  }

  export type FreequoteAvgAggregateOutputType = {
    id: number | null
  }

  export type FreequoteSumAggregateOutputType = {
    id: number | null
  }

  export type FreequoteMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    services: string | null
    date: string | null
    time: string | null
  }

  export type FreequoteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    services: string | null
    date: string | null
    time: string | null
  }

  export type FreequoteCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    services: number
    date: number
    time: number
    _all: number
  }


  export type FreequoteAvgAggregateInputType = {
    id?: true
  }

  export type FreequoteSumAggregateInputType = {
    id?: true
  }

  export type FreequoteMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    date?: true
    time?: true
  }

  export type FreequoteMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    date?: true
    time?: true
  }

  export type FreequoteCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    date?: true
    time?: true
    _all?: true
  }

  export type FreequoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freequote to aggregate.
     */
    where?: freequoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freequotes to fetch.
     */
    orderBy?: freequoteOrderByWithRelationInput | freequoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: freequoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freequotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freequotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned freequotes
    **/
    _count?: true | FreequoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FreequoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FreequoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FreequoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FreequoteMaxAggregateInputType
  }

  export type GetFreequoteAggregateType<T extends FreequoteAggregateArgs> = {
        [P in keyof T & keyof AggregateFreequote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFreequote[P]>
      : GetScalarType<T[P], AggregateFreequote[P]>
  }




  export type freequoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: freequoteWhereInput
    orderBy?: freequoteOrderByWithAggregationInput | freequoteOrderByWithAggregationInput[]
    by: FreequoteScalarFieldEnum[] | FreequoteScalarFieldEnum
    having?: freequoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FreequoteCountAggregateInputType | true
    _avg?: FreequoteAvgAggregateInputType
    _sum?: FreequoteSumAggregateInputType
    _min?: FreequoteMinAggregateInputType
    _max?: FreequoteMaxAggregateInputType
  }

  export type FreequoteGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    services: string
    date: string
    time: string
    _count: FreequoteCountAggregateOutputType | null
    _avg: FreequoteAvgAggregateOutputType | null
    _sum: FreequoteSumAggregateOutputType | null
    _min: FreequoteMinAggregateOutputType | null
    _max: FreequoteMaxAggregateOutputType | null
  }

  type GetFreequoteGroupByPayload<T extends freequoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FreequoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FreequoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FreequoteGroupByOutputType[P]>
            : GetScalarType<T[P], FreequoteGroupByOutputType[P]>
        }
      >
    >


  export type freequoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    services?: boolean
    date?: boolean
    time?: boolean
  }, ExtArgs["result"]["freequote"]>



  export type freequoteSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    services?: boolean
    date?: boolean
    time?: boolean
  }

  export type freequoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "services" | "date" | "time", ExtArgs["result"]["freequote"]>

  export type $freequotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "freequote"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      services: string
      date: string
      time: string
    }, ExtArgs["result"]["freequote"]>
    composites: {}
  }

  type freequoteGetPayload<S extends boolean | null | undefined | freequoteDefaultArgs> = $Result.GetResult<Prisma.$freequotePayload, S>

  type freequoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<freequoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FreequoteCountAggregateInputType | true
    }

  export interface freequoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['freequote'], meta: { name: 'freequote' } }
    /**
     * Find zero or one Freequote that matches the filter.
     * @param {freequoteFindUniqueArgs} args - Arguments to find a Freequote
     * @example
     * // Get one Freequote
     * const freequote = await prisma.freequote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends freequoteFindUniqueArgs>(args: SelectSubset<T, freequoteFindUniqueArgs<ExtArgs>>): Prisma__freequoteClient<$Result.GetResult<Prisma.$freequotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Freequote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {freequoteFindUniqueOrThrowArgs} args - Arguments to find a Freequote
     * @example
     * // Get one Freequote
     * const freequote = await prisma.freequote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends freequoteFindUniqueOrThrowArgs>(args: SelectSubset<T, freequoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__freequoteClient<$Result.GetResult<Prisma.$freequotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freequote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freequoteFindFirstArgs} args - Arguments to find a Freequote
     * @example
     * // Get one Freequote
     * const freequote = await prisma.freequote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends freequoteFindFirstArgs>(args?: SelectSubset<T, freequoteFindFirstArgs<ExtArgs>>): Prisma__freequoteClient<$Result.GetResult<Prisma.$freequotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Freequote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freequoteFindFirstOrThrowArgs} args - Arguments to find a Freequote
     * @example
     * // Get one Freequote
     * const freequote = await prisma.freequote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends freequoteFindFirstOrThrowArgs>(args?: SelectSubset<T, freequoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__freequoteClient<$Result.GetResult<Prisma.$freequotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Freequotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freequoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Freequotes
     * const freequotes = await prisma.freequote.findMany()
     * 
     * // Get first 10 Freequotes
     * const freequotes = await prisma.freequote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const freequoteWithIdOnly = await prisma.freequote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends freequoteFindManyArgs>(args?: SelectSubset<T, freequoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$freequotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Freequote.
     * @param {freequoteCreateArgs} args - Arguments to create a Freequote.
     * @example
     * // Create one Freequote
     * const Freequote = await prisma.freequote.create({
     *   data: {
     *     // ... data to create a Freequote
     *   }
     * })
     * 
     */
    create<T extends freequoteCreateArgs>(args: SelectSubset<T, freequoteCreateArgs<ExtArgs>>): Prisma__freequoteClient<$Result.GetResult<Prisma.$freequotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Freequotes.
     * @param {freequoteCreateManyArgs} args - Arguments to create many Freequotes.
     * @example
     * // Create many Freequotes
     * const freequote = await prisma.freequote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends freequoteCreateManyArgs>(args?: SelectSubset<T, freequoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Freequote.
     * @param {freequoteDeleteArgs} args - Arguments to delete one Freequote.
     * @example
     * // Delete one Freequote
     * const Freequote = await prisma.freequote.delete({
     *   where: {
     *     // ... filter to delete one Freequote
     *   }
     * })
     * 
     */
    delete<T extends freequoteDeleteArgs>(args: SelectSubset<T, freequoteDeleteArgs<ExtArgs>>): Prisma__freequoteClient<$Result.GetResult<Prisma.$freequotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Freequote.
     * @param {freequoteUpdateArgs} args - Arguments to update one Freequote.
     * @example
     * // Update one Freequote
     * const freequote = await prisma.freequote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends freequoteUpdateArgs>(args: SelectSubset<T, freequoteUpdateArgs<ExtArgs>>): Prisma__freequoteClient<$Result.GetResult<Prisma.$freequotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Freequotes.
     * @param {freequoteDeleteManyArgs} args - Arguments to filter Freequotes to delete.
     * @example
     * // Delete a few Freequotes
     * const { count } = await prisma.freequote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends freequoteDeleteManyArgs>(args?: SelectSubset<T, freequoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Freequotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freequoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Freequotes
     * const freequote = await prisma.freequote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends freequoteUpdateManyArgs>(args: SelectSubset<T, freequoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Freequote.
     * @param {freequoteUpsertArgs} args - Arguments to update or create a Freequote.
     * @example
     * // Update or create a Freequote
     * const freequote = await prisma.freequote.upsert({
     *   create: {
     *     // ... data to create a Freequote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Freequote we want to update
     *   }
     * })
     */
    upsert<T extends freequoteUpsertArgs>(args: SelectSubset<T, freequoteUpsertArgs<ExtArgs>>): Prisma__freequoteClient<$Result.GetResult<Prisma.$freequotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Freequotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freequoteCountArgs} args - Arguments to filter Freequotes to count.
     * @example
     * // Count the number of Freequotes
     * const count = await prisma.freequote.count({
     *   where: {
     *     // ... the filter for the Freequotes we want to count
     *   }
     * })
    **/
    count<T extends freequoteCountArgs>(
      args?: Subset<T, freequoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FreequoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Freequote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FreequoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FreequoteAggregateArgs>(args: Subset<T, FreequoteAggregateArgs>): Prisma.PrismaPromise<GetFreequoteAggregateType<T>>

    /**
     * Group by Freequote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {freequoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends freequoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: freequoteGroupByArgs['orderBy'] }
        : { orderBy?: freequoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, freequoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFreequoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the freequote model
   */
  readonly fields: freequoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for freequote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__freequoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the freequote model
   */
  interface freequoteFieldRefs {
    readonly id: FieldRef<"freequote", 'Int'>
    readonly name: FieldRef<"freequote", 'String'>
    readonly email: FieldRef<"freequote", 'String'>
    readonly phone: FieldRef<"freequote", 'String'>
    readonly services: FieldRef<"freequote", 'String'>
    readonly date: FieldRef<"freequote", 'String'>
    readonly time: FieldRef<"freequote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * freequote findUnique
   */
  export type freequoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
    /**
     * Filter, which freequote to fetch.
     */
    where: freequoteWhereUniqueInput
  }

  /**
   * freequote findUniqueOrThrow
   */
  export type freequoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
    /**
     * Filter, which freequote to fetch.
     */
    where: freequoteWhereUniqueInput
  }

  /**
   * freequote findFirst
   */
  export type freequoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
    /**
     * Filter, which freequote to fetch.
     */
    where?: freequoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freequotes to fetch.
     */
    orderBy?: freequoteOrderByWithRelationInput | freequoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for freequotes.
     */
    cursor?: freequoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freequotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freequotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of freequotes.
     */
    distinct?: FreequoteScalarFieldEnum | FreequoteScalarFieldEnum[]
  }

  /**
   * freequote findFirstOrThrow
   */
  export type freequoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
    /**
     * Filter, which freequote to fetch.
     */
    where?: freequoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freequotes to fetch.
     */
    orderBy?: freequoteOrderByWithRelationInput | freequoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for freequotes.
     */
    cursor?: freequoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freequotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freequotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of freequotes.
     */
    distinct?: FreequoteScalarFieldEnum | FreequoteScalarFieldEnum[]
  }

  /**
   * freequote findMany
   */
  export type freequoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
    /**
     * Filter, which freequotes to fetch.
     */
    where?: freequoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of freequotes to fetch.
     */
    orderBy?: freequoteOrderByWithRelationInput | freequoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing freequotes.
     */
    cursor?: freequoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` freequotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` freequotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of freequotes.
     */
    distinct?: FreequoteScalarFieldEnum | FreequoteScalarFieldEnum[]
  }

  /**
   * freequote create
   */
  export type freequoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
    /**
     * The data needed to create a freequote.
     */
    data: XOR<freequoteCreateInput, freequoteUncheckedCreateInput>
  }

  /**
   * freequote createMany
   */
  export type freequoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many freequotes.
     */
    data: freequoteCreateManyInput | freequoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * freequote update
   */
  export type freequoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
    /**
     * The data needed to update a freequote.
     */
    data: XOR<freequoteUpdateInput, freequoteUncheckedUpdateInput>
    /**
     * Choose, which freequote to update.
     */
    where: freequoteWhereUniqueInput
  }

  /**
   * freequote updateMany
   */
  export type freequoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update freequotes.
     */
    data: XOR<freequoteUpdateManyMutationInput, freequoteUncheckedUpdateManyInput>
    /**
     * Filter which freequotes to update
     */
    where?: freequoteWhereInput
    /**
     * Limit how many freequotes to update.
     */
    limit?: number
  }

  /**
   * freequote upsert
   */
  export type freequoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
    /**
     * The filter to search for the freequote to update in case it exists.
     */
    where: freequoteWhereUniqueInput
    /**
     * In case the freequote found by the `where` argument doesn't exist, create a new freequote with this data.
     */
    create: XOR<freequoteCreateInput, freequoteUncheckedCreateInput>
    /**
     * In case the freequote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<freequoteUpdateInput, freequoteUncheckedUpdateInput>
  }

  /**
   * freequote delete
   */
  export type freequoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
    /**
     * Filter which freequote to delete.
     */
    where: freequoteWhereUniqueInput
  }

  /**
   * freequote deleteMany
   */
  export type freequoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which freequotes to delete
     */
    where?: freequoteWhereInput
    /**
     * Limit how many freequotes to delete.
     */
    limit?: number
  }

  /**
   * freequote without action
   */
  export type freequoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the freequote
     */
    select?: freequoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the freequote
     */
    omit?: freequoteOmit<ExtArgs> | null
  }


  /**
   * Model indexcontact
   */

  export type AggregateIndexcontact = {
    _count: IndexcontactCountAggregateOutputType | null
    _avg: IndexcontactAvgAggregateOutputType | null
    _sum: IndexcontactSumAggregateOutputType | null
    _min: IndexcontactMinAggregateOutputType | null
    _max: IndexcontactMaxAggregateOutputType | null
  }

  export type IndexcontactAvgAggregateOutputType = {
    id: number | null
  }

  export type IndexcontactSumAggregateOutputType = {
    id: number | null
  }

  export type IndexcontactMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    services: string | null
    comment: string | null
    date: string | null
    time: string | null
  }

  export type IndexcontactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    services: string | null
    comment: string | null
    date: string | null
    time: string | null
  }

  export type IndexcontactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    services: number
    comment: number
    date: number
    time: number
    _all: number
  }


  export type IndexcontactAvgAggregateInputType = {
    id?: true
  }

  export type IndexcontactSumAggregateInputType = {
    id?: true
  }

  export type IndexcontactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    comment?: true
    date?: true
    time?: true
  }

  export type IndexcontactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    comment?: true
    date?: true
    time?: true
  }

  export type IndexcontactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    comment?: true
    date?: true
    time?: true
    _all?: true
  }

  export type IndexcontactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which indexcontact to aggregate.
     */
    where?: indexcontactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of indexcontacts to fetch.
     */
    orderBy?: indexcontactOrderByWithRelationInput | indexcontactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: indexcontactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` indexcontacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` indexcontacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned indexcontacts
    **/
    _count?: true | IndexcontactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IndexcontactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IndexcontactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IndexcontactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IndexcontactMaxAggregateInputType
  }

  export type GetIndexcontactAggregateType<T extends IndexcontactAggregateArgs> = {
        [P in keyof T & keyof AggregateIndexcontact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIndexcontact[P]>
      : GetScalarType<T[P], AggregateIndexcontact[P]>
  }




  export type indexcontactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: indexcontactWhereInput
    orderBy?: indexcontactOrderByWithAggregationInput | indexcontactOrderByWithAggregationInput[]
    by: IndexcontactScalarFieldEnum[] | IndexcontactScalarFieldEnum
    having?: indexcontactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IndexcontactCountAggregateInputType | true
    _avg?: IndexcontactAvgAggregateInputType
    _sum?: IndexcontactSumAggregateInputType
    _min?: IndexcontactMinAggregateInputType
    _max?: IndexcontactMaxAggregateInputType
  }

  export type IndexcontactGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    services: string
    comment: string
    date: string
    time: string
    _count: IndexcontactCountAggregateOutputType | null
    _avg: IndexcontactAvgAggregateOutputType | null
    _sum: IndexcontactSumAggregateOutputType | null
    _min: IndexcontactMinAggregateOutputType | null
    _max: IndexcontactMaxAggregateOutputType | null
  }

  type GetIndexcontactGroupByPayload<T extends indexcontactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IndexcontactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IndexcontactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IndexcontactGroupByOutputType[P]>
            : GetScalarType<T[P], IndexcontactGroupByOutputType[P]>
        }
      >
    >


  export type indexcontactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    services?: boolean
    comment?: boolean
    date?: boolean
    time?: boolean
  }, ExtArgs["result"]["indexcontact"]>



  export type indexcontactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    services?: boolean
    comment?: boolean
    date?: boolean
    time?: boolean
  }

  export type indexcontactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "services" | "comment" | "date" | "time", ExtArgs["result"]["indexcontact"]>

  export type $indexcontactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "indexcontact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      services: string
      comment: string
      date: string
      time: string
    }, ExtArgs["result"]["indexcontact"]>
    composites: {}
  }

  type indexcontactGetPayload<S extends boolean | null | undefined | indexcontactDefaultArgs> = $Result.GetResult<Prisma.$indexcontactPayload, S>

  type indexcontactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<indexcontactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IndexcontactCountAggregateInputType | true
    }

  export interface indexcontactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['indexcontact'], meta: { name: 'indexcontact' } }
    /**
     * Find zero or one Indexcontact that matches the filter.
     * @param {indexcontactFindUniqueArgs} args - Arguments to find a Indexcontact
     * @example
     * // Get one Indexcontact
     * const indexcontact = await prisma.indexcontact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends indexcontactFindUniqueArgs>(args: SelectSubset<T, indexcontactFindUniqueArgs<ExtArgs>>): Prisma__indexcontactClient<$Result.GetResult<Prisma.$indexcontactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Indexcontact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {indexcontactFindUniqueOrThrowArgs} args - Arguments to find a Indexcontact
     * @example
     * // Get one Indexcontact
     * const indexcontact = await prisma.indexcontact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends indexcontactFindUniqueOrThrowArgs>(args: SelectSubset<T, indexcontactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__indexcontactClient<$Result.GetResult<Prisma.$indexcontactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indexcontact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indexcontactFindFirstArgs} args - Arguments to find a Indexcontact
     * @example
     * // Get one Indexcontact
     * const indexcontact = await prisma.indexcontact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends indexcontactFindFirstArgs>(args?: SelectSubset<T, indexcontactFindFirstArgs<ExtArgs>>): Prisma__indexcontactClient<$Result.GetResult<Prisma.$indexcontactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Indexcontact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indexcontactFindFirstOrThrowArgs} args - Arguments to find a Indexcontact
     * @example
     * // Get one Indexcontact
     * const indexcontact = await prisma.indexcontact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends indexcontactFindFirstOrThrowArgs>(args?: SelectSubset<T, indexcontactFindFirstOrThrowArgs<ExtArgs>>): Prisma__indexcontactClient<$Result.GetResult<Prisma.$indexcontactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Indexcontacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indexcontactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Indexcontacts
     * const indexcontacts = await prisma.indexcontact.findMany()
     * 
     * // Get first 10 Indexcontacts
     * const indexcontacts = await prisma.indexcontact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const indexcontactWithIdOnly = await prisma.indexcontact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends indexcontactFindManyArgs>(args?: SelectSubset<T, indexcontactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$indexcontactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Indexcontact.
     * @param {indexcontactCreateArgs} args - Arguments to create a Indexcontact.
     * @example
     * // Create one Indexcontact
     * const Indexcontact = await prisma.indexcontact.create({
     *   data: {
     *     // ... data to create a Indexcontact
     *   }
     * })
     * 
     */
    create<T extends indexcontactCreateArgs>(args: SelectSubset<T, indexcontactCreateArgs<ExtArgs>>): Prisma__indexcontactClient<$Result.GetResult<Prisma.$indexcontactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Indexcontacts.
     * @param {indexcontactCreateManyArgs} args - Arguments to create many Indexcontacts.
     * @example
     * // Create many Indexcontacts
     * const indexcontact = await prisma.indexcontact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends indexcontactCreateManyArgs>(args?: SelectSubset<T, indexcontactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Indexcontact.
     * @param {indexcontactDeleteArgs} args - Arguments to delete one Indexcontact.
     * @example
     * // Delete one Indexcontact
     * const Indexcontact = await prisma.indexcontact.delete({
     *   where: {
     *     // ... filter to delete one Indexcontact
     *   }
     * })
     * 
     */
    delete<T extends indexcontactDeleteArgs>(args: SelectSubset<T, indexcontactDeleteArgs<ExtArgs>>): Prisma__indexcontactClient<$Result.GetResult<Prisma.$indexcontactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Indexcontact.
     * @param {indexcontactUpdateArgs} args - Arguments to update one Indexcontact.
     * @example
     * // Update one Indexcontact
     * const indexcontact = await prisma.indexcontact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends indexcontactUpdateArgs>(args: SelectSubset<T, indexcontactUpdateArgs<ExtArgs>>): Prisma__indexcontactClient<$Result.GetResult<Prisma.$indexcontactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Indexcontacts.
     * @param {indexcontactDeleteManyArgs} args - Arguments to filter Indexcontacts to delete.
     * @example
     * // Delete a few Indexcontacts
     * const { count } = await prisma.indexcontact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends indexcontactDeleteManyArgs>(args?: SelectSubset<T, indexcontactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Indexcontacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indexcontactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Indexcontacts
     * const indexcontact = await prisma.indexcontact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends indexcontactUpdateManyArgs>(args: SelectSubset<T, indexcontactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Indexcontact.
     * @param {indexcontactUpsertArgs} args - Arguments to update or create a Indexcontact.
     * @example
     * // Update or create a Indexcontact
     * const indexcontact = await prisma.indexcontact.upsert({
     *   create: {
     *     // ... data to create a Indexcontact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Indexcontact we want to update
     *   }
     * })
     */
    upsert<T extends indexcontactUpsertArgs>(args: SelectSubset<T, indexcontactUpsertArgs<ExtArgs>>): Prisma__indexcontactClient<$Result.GetResult<Prisma.$indexcontactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Indexcontacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indexcontactCountArgs} args - Arguments to filter Indexcontacts to count.
     * @example
     * // Count the number of Indexcontacts
     * const count = await prisma.indexcontact.count({
     *   where: {
     *     // ... the filter for the Indexcontacts we want to count
     *   }
     * })
    **/
    count<T extends indexcontactCountArgs>(
      args?: Subset<T, indexcontactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IndexcontactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Indexcontact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IndexcontactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IndexcontactAggregateArgs>(args: Subset<T, IndexcontactAggregateArgs>): Prisma.PrismaPromise<GetIndexcontactAggregateType<T>>

    /**
     * Group by Indexcontact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {indexcontactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends indexcontactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: indexcontactGroupByArgs['orderBy'] }
        : { orderBy?: indexcontactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, indexcontactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndexcontactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the indexcontact model
   */
  readonly fields: indexcontactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for indexcontact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__indexcontactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the indexcontact model
   */
  interface indexcontactFieldRefs {
    readonly id: FieldRef<"indexcontact", 'Int'>
    readonly name: FieldRef<"indexcontact", 'String'>
    readonly email: FieldRef<"indexcontact", 'String'>
    readonly phone: FieldRef<"indexcontact", 'String'>
    readonly services: FieldRef<"indexcontact", 'String'>
    readonly comment: FieldRef<"indexcontact", 'String'>
    readonly date: FieldRef<"indexcontact", 'String'>
    readonly time: FieldRef<"indexcontact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * indexcontact findUnique
   */
  export type indexcontactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
    /**
     * Filter, which indexcontact to fetch.
     */
    where: indexcontactWhereUniqueInput
  }

  /**
   * indexcontact findUniqueOrThrow
   */
  export type indexcontactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
    /**
     * Filter, which indexcontact to fetch.
     */
    where: indexcontactWhereUniqueInput
  }

  /**
   * indexcontact findFirst
   */
  export type indexcontactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
    /**
     * Filter, which indexcontact to fetch.
     */
    where?: indexcontactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of indexcontacts to fetch.
     */
    orderBy?: indexcontactOrderByWithRelationInput | indexcontactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for indexcontacts.
     */
    cursor?: indexcontactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` indexcontacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` indexcontacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of indexcontacts.
     */
    distinct?: IndexcontactScalarFieldEnum | IndexcontactScalarFieldEnum[]
  }

  /**
   * indexcontact findFirstOrThrow
   */
  export type indexcontactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
    /**
     * Filter, which indexcontact to fetch.
     */
    where?: indexcontactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of indexcontacts to fetch.
     */
    orderBy?: indexcontactOrderByWithRelationInput | indexcontactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for indexcontacts.
     */
    cursor?: indexcontactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` indexcontacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` indexcontacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of indexcontacts.
     */
    distinct?: IndexcontactScalarFieldEnum | IndexcontactScalarFieldEnum[]
  }

  /**
   * indexcontact findMany
   */
  export type indexcontactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
    /**
     * Filter, which indexcontacts to fetch.
     */
    where?: indexcontactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of indexcontacts to fetch.
     */
    orderBy?: indexcontactOrderByWithRelationInput | indexcontactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing indexcontacts.
     */
    cursor?: indexcontactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` indexcontacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` indexcontacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of indexcontacts.
     */
    distinct?: IndexcontactScalarFieldEnum | IndexcontactScalarFieldEnum[]
  }

  /**
   * indexcontact create
   */
  export type indexcontactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
    /**
     * The data needed to create a indexcontact.
     */
    data: XOR<indexcontactCreateInput, indexcontactUncheckedCreateInput>
  }

  /**
   * indexcontact createMany
   */
  export type indexcontactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many indexcontacts.
     */
    data: indexcontactCreateManyInput | indexcontactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * indexcontact update
   */
  export type indexcontactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
    /**
     * The data needed to update a indexcontact.
     */
    data: XOR<indexcontactUpdateInput, indexcontactUncheckedUpdateInput>
    /**
     * Choose, which indexcontact to update.
     */
    where: indexcontactWhereUniqueInput
  }

  /**
   * indexcontact updateMany
   */
  export type indexcontactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update indexcontacts.
     */
    data: XOR<indexcontactUpdateManyMutationInput, indexcontactUncheckedUpdateManyInput>
    /**
     * Filter which indexcontacts to update
     */
    where?: indexcontactWhereInput
    /**
     * Limit how many indexcontacts to update.
     */
    limit?: number
  }

  /**
   * indexcontact upsert
   */
  export type indexcontactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
    /**
     * The filter to search for the indexcontact to update in case it exists.
     */
    where: indexcontactWhereUniqueInput
    /**
     * In case the indexcontact found by the `where` argument doesn't exist, create a new indexcontact with this data.
     */
    create: XOR<indexcontactCreateInput, indexcontactUncheckedCreateInput>
    /**
     * In case the indexcontact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<indexcontactUpdateInput, indexcontactUncheckedUpdateInput>
  }

  /**
   * indexcontact delete
   */
  export type indexcontactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
    /**
     * Filter which indexcontact to delete.
     */
    where: indexcontactWhereUniqueInput
  }

  /**
   * indexcontact deleteMany
   */
  export type indexcontactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which indexcontacts to delete
     */
    where?: indexcontactWhereInput
    /**
     * Limit how many indexcontacts to delete.
     */
    limit?: number
  }

  /**
   * indexcontact without action
   */
  export type indexcontactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the indexcontact
     */
    select?: indexcontactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the indexcontact
     */
    omit?: indexcontactOmit<ExtArgs> | null
  }


  /**
   * Model Login
   */

  export type AggregateLogin = {
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  export type LoginAvgAggregateOutputType = {
    id: number | null
  }

  export type LoginSumAggregateOutputType = {
    id: number | null
  }

  export type LoginMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type LoginMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
  }

  export type LoginCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type LoginAvgAggregateInputType = {
    id?: true
  }

  export type LoginSumAggregateInputType = {
    id?: true
  }

  export type LoginMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type LoginMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type LoginCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type LoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Login to aggregate.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logins
    **/
    _count?: true | LoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginMaxAggregateInputType
  }

  export type GetLoginAggregateType<T extends LoginAggregateArgs> = {
        [P in keyof T & keyof AggregateLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogin[P]>
      : GetScalarType<T[P], AggregateLogin[P]>
  }




  export type LoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginWhereInput
    orderBy?: LoginOrderByWithAggregationInput | LoginOrderByWithAggregationInput[]
    by: LoginScalarFieldEnum[] | LoginScalarFieldEnum
    having?: LoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginCountAggregateInputType | true
    _avg?: LoginAvgAggregateInputType
    _sum?: LoginSumAggregateInputType
    _min?: LoginMinAggregateInputType
    _max?: LoginMaxAggregateInputType
  }

  export type LoginGroupByOutputType = {
    id: number
    email: string
    password: string
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  type GetLoginGroupByPayload<T extends LoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginGroupByOutputType[P]>
            : GetScalarType<T[P], LoginGroupByOutputType[P]>
        }
      >
    >


  export type LoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["login"]>



  export type LoginSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type LoginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password", ExtArgs["result"]["login"]>

  export type $LoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Login"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
    }, ExtArgs["result"]["login"]>
    composites: {}
  }

  type LoginGetPayload<S extends boolean | null | undefined | LoginDefaultArgs> = $Result.GetResult<Prisma.$LoginPayload, S>

  type LoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoginCountAggregateInputType | true
    }

  export interface LoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Login'], meta: { name: 'Login' } }
    /**
     * Find zero or one Login that matches the filter.
     * @param {LoginFindUniqueArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginFindUniqueArgs>(args: SelectSubset<T, LoginFindUniqueArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Login that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoginFindUniqueOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindFirstArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginFindFirstArgs>(args?: SelectSubset<T, LoginFindFirstArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Login that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindFirstOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logins
     * const logins = await prisma.login.findMany()
     * 
     * // Get first 10 Logins
     * const logins = await prisma.login.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loginWithIdOnly = await prisma.login.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoginFindManyArgs>(args?: SelectSubset<T, LoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Login.
     * @param {LoginCreateArgs} args - Arguments to create a Login.
     * @example
     * // Create one Login
     * const Login = await prisma.login.create({
     *   data: {
     *     // ... data to create a Login
     *   }
     * })
     * 
     */
    create<T extends LoginCreateArgs>(args: SelectSubset<T, LoginCreateArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logins.
     * @param {LoginCreateManyArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const login = await prisma.login.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginCreateManyArgs>(args?: SelectSubset<T, LoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Login.
     * @param {LoginDeleteArgs} args - Arguments to delete one Login.
     * @example
     * // Delete one Login
     * const Login = await prisma.login.delete({
     *   where: {
     *     // ... filter to delete one Login
     *   }
     * })
     * 
     */
    delete<T extends LoginDeleteArgs>(args: SelectSubset<T, LoginDeleteArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Login.
     * @param {LoginUpdateArgs} args - Arguments to update one Login.
     * @example
     * // Update one Login
     * const login = await prisma.login.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginUpdateArgs>(args: SelectSubset<T, LoginUpdateArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logins.
     * @param {LoginDeleteManyArgs} args - Arguments to filter Logins to delete.
     * @example
     * // Delete a few Logins
     * const { count } = await prisma.login.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginDeleteManyArgs>(args?: SelectSubset<T, LoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logins
     * const login = await prisma.login.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginUpdateManyArgs>(args: SelectSubset<T, LoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Login.
     * @param {LoginUpsertArgs} args - Arguments to update or create a Login.
     * @example
     * // Update or create a Login
     * const login = await prisma.login.upsert({
     *   create: {
     *     // ... data to create a Login
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Login we want to update
     *   }
     * })
     */
    upsert<T extends LoginUpsertArgs>(args: SelectSubset<T, LoginUpsertArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginCountArgs} args - Arguments to filter Logins to count.
     * @example
     * // Count the number of Logins
     * const count = await prisma.login.count({
     *   where: {
     *     // ... the filter for the Logins we want to count
     *   }
     * })
    **/
    count<T extends LoginCountArgs>(
      args?: Subset<T, LoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoginAggregateArgs>(args: Subset<T, LoginAggregateArgs>): Prisma.PrismaPromise<GetLoginAggregateType<T>>

    /**
     * Group by Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginGroupByArgs['orderBy'] }
        : { orderBy?: LoginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Login model
   */
  readonly fields: LoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Login.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Login model
   */
  interface LoginFieldRefs {
    readonly id: FieldRef<"Login", 'Int'>
    readonly email: FieldRef<"Login", 'String'>
    readonly password: FieldRef<"Login", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Login findUnique
   */
  export type LoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login findUniqueOrThrow
   */
  export type LoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login findFirst
   */
  export type LoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login findFirstOrThrow
   */
  export type LoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login findMany
   */
  export type LoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Filter, which Logins to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login create
   */
  export type LoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * The data needed to create a Login.
     */
    data: XOR<LoginCreateInput, LoginUncheckedCreateInput>
  }

  /**
   * Login createMany
   */
  export type LoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logins.
     */
    data: LoginCreateManyInput | LoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Login update
   */
  export type LoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * The data needed to update a Login.
     */
    data: XOR<LoginUpdateInput, LoginUncheckedUpdateInput>
    /**
     * Choose, which Login to update.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login updateMany
   */
  export type LoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logins.
     */
    data: XOR<LoginUpdateManyMutationInput, LoginUncheckedUpdateManyInput>
    /**
     * Filter which Logins to update
     */
    where?: LoginWhereInput
    /**
     * Limit how many Logins to update.
     */
    limit?: number
  }

  /**
   * Login upsert
   */
  export type LoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * The filter to search for the Login to update in case it exists.
     */
    where: LoginWhereUniqueInput
    /**
     * In case the Login found by the `where` argument doesn't exist, create a new Login with this data.
     */
    create: XOR<LoginCreateInput, LoginUncheckedCreateInput>
    /**
     * In case the Login was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginUpdateInput, LoginUncheckedUpdateInput>
  }

  /**
   * Login delete
   */
  export type LoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
    /**
     * Filter which Login to delete.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login deleteMany
   */
  export type LoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logins to delete
     */
    where?: LoginWhereInput
    /**
     * Limit how many Logins to delete.
     */
    limit?: number
  }

  /**
   * Login without action
   */
  export type LoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Login
     */
    omit?: LoginOmit<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>



  export type AdminUserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "lastLoginAt" | "createdAt" | "updatedAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly email: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly lastLoginAt: FieldRef<"AdminUser", 'DateTime'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    id: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    id: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: number | null
    source: $Enums.SubmissionSource | null
    name: string | null
    email: string | null
    phone: string | null
    services: string | null
    message: string | null
    ip: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: number | null
    source: $Enums.SubmissionSource | null
    name: string | null
    email: string | null
    phone: string | null
    services: string | null
    message: string | null
    ip: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    source: number
    name: number
    email: number
    phone: number
    services: number
    message: number
    ip: number
    read: number
    createdAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    id?: true
  }

  export type SubmissionSumAggregateInputType = {
    id?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    source?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    message?: true
    ip?: true
    read?: true
    createdAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    source?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    message?: true
    ip?: true
    read?: true
    createdAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    source?: true
    name?: true
    email?: true
    phone?: true
    services?: true
    message?: true
    ip?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: number
    source: $Enums.SubmissionSource
    name: string
    email: string
    phone: string
    services: string
    message: string | null
    ip: string | null
    read: boolean
    createdAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    services?: boolean
    message?: boolean
    ip?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["submission"]>



  export type SubmissionSelectScalar = {
    id?: boolean
    source?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    services?: boolean
    message?: boolean
    ip?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "name" | "email" | "phone" | "services" | "message" | "ip" | "read" | "createdAt", ExtArgs["result"]["submission"]>

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      source: $Enums.SubmissionSource
      name: string
      email: string
      phone: string
      services: string
      message: string | null
      ip: string | null
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'Int'>
    readonly source: FieldRef<"Submission", 'SubmissionSource'>
    readonly name: FieldRef<"Submission", 'String'>
    readonly email: FieldRef<"Submission", 'String'>
    readonly phone: FieldRef<"Submission", 'String'>
    readonly services: FieldRef<"Submission", 'String'>
    readonly message: FieldRef<"Submission", 'String'>
    readonly ip: FieldRef<"Submission", 'String'>
    readonly read: FieldRef<"Submission", 'Boolean'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ContactcontactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    services: 'services',
    comment: 'comment',
    date: 'date',
    time: 'time'
  };

  export type ContactcontactScalarFieldEnum = (typeof ContactcontactScalarFieldEnum)[keyof typeof ContactcontactScalarFieldEnum]


  export const FreequoteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    services: 'services',
    date: 'date',
    time: 'time'
  };

  export type FreequoteScalarFieldEnum = (typeof FreequoteScalarFieldEnum)[keyof typeof FreequoteScalarFieldEnum]


  export const IndexcontactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    services: 'services',
    comment: 'comment',
    date: 'date',
    time: 'time'
  };

  export type IndexcontactScalarFieldEnum = (typeof IndexcontactScalarFieldEnum)[keyof typeof IndexcontactScalarFieldEnum]


  export const LoginScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type LoginScalarFieldEnum = (typeof LoginScalarFieldEnum)[keyof typeof LoginScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    source: 'source',
    name: 'name',
    email: 'email',
    phone: 'phone',
    services: 'services',
    message: 'message',
    ip: 'ip',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const contactcontactOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    services: 'services',
    comment: 'comment',
    date: 'date',
    time: 'time'
  };

  export type contactcontactOrderByRelevanceFieldEnum = (typeof contactcontactOrderByRelevanceFieldEnum)[keyof typeof contactcontactOrderByRelevanceFieldEnum]


  export const freequoteOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    services: 'services',
    date: 'date',
    time: 'time'
  };

  export type freequoteOrderByRelevanceFieldEnum = (typeof freequoteOrderByRelevanceFieldEnum)[keyof typeof freequoteOrderByRelevanceFieldEnum]


  export const indexcontactOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    services: 'services',
    comment: 'comment',
    date: 'date',
    time: 'time'
  };

  export type indexcontactOrderByRelevanceFieldEnum = (typeof indexcontactOrderByRelevanceFieldEnum)[keyof typeof indexcontactOrderByRelevanceFieldEnum]


  export const LoginOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password'
  };

  export type LoginOrderByRelevanceFieldEnum = (typeof LoginOrderByRelevanceFieldEnum)[keyof typeof LoginOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AdminUserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type AdminUserOrderByRelevanceFieldEnum = (typeof AdminUserOrderByRelevanceFieldEnum)[keyof typeof AdminUserOrderByRelevanceFieldEnum]


  export const SubmissionOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    services: 'services',
    message: 'message',
    ip: 'ip'
  };

  export type SubmissionOrderByRelevanceFieldEnum = (typeof SubmissionOrderByRelevanceFieldEnum)[keyof typeof SubmissionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'SubmissionSource'
   */
  export type EnumSubmissionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionSource'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type contactcontactWhereInput = {
    AND?: contactcontactWhereInput | contactcontactWhereInput[]
    OR?: contactcontactWhereInput[]
    NOT?: contactcontactWhereInput | contactcontactWhereInput[]
    id?: IntFilter<"contactcontact"> | number
    name?: StringFilter<"contactcontact"> | string
    email?: StringFilter<"contactcontact"> | string
    phone?: StringFilter<"contactcontact"> | string
    services?: StringFilter<"contactcontact"> | string
    comment?: StringFilter<"contactcontact"> | string
    date?: StringFilter<"contactcontact"> | string
    time?: StringFilter<"contactcontact"> | string
  }

  export type contactcontactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
    _relevance?: contactcontactOrderByRelevanceInput
  }

  export type contactcontactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contactcontactWhereInput | contactcontactWhereInput[]
    OR?: contactcontactWhereInput[]
    NOT?: contactcontactWhereInput | contactcontactWhereInput[]
    name?: StringFilter<"contactcontact"> | string
    email?: StringFilter<"contactcontact"> | string
    phone?: StringFilter<"contactcontact"> | string
    services?: StringFilter<"contactcontact"> | string
    comment?: StringFilter<"contactcontact"> | string
    date?: StringFilter<"contactcontact"> | string
    time?: StringFilter<"contactcontact"> | string
  }, "id">

  export type contactcontactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
    _count?: contactcontactCountOrderByAggregateInput
    _avg?: contactcontactAvgOrderByAggregateInput
    _max?: contactcontactMaxOrderByAggregateInput
    _min?: contactcontactMinOrderByAggregateInput
    _sum?: contactcontactSumOrderByAggregateInput
  }

  export type contactcontactScalarWhereWithAggregatesInput = {
    AND?: contactcontactScalarWhereWithAggregatesInput | contactcontactScalarWhereWithAggregatesInput[]
    OR?: contactcontactScalarWhereWithAggregatesInput[]
    NOT?: contactcontactScalarWhereWithAggregatesInput | contactcontactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contactcontact"> | number
    name?: StringWithAggregatesFilter<"contactcontact"> | string
    email?: StringWithAggregatesFilter<"contactcontact"> | string
    phone?: StringWithAggregatesFilter<"contactcontact"> | string
    services?: StringWithAggregatesFilter<"contactcontact"> | string
    comment?: StringWithAggregatesFilter<"contactcontact"> | string
    date?: StringWithAggregatesFilter<"contactcontact"> | string
    time?: StringWithAggregatesFilter<"contactcontact"> | string
  }

  export type freequoteWhereInput = {
    AND?: freequoteWhereInput | freequoteWhereInput[]
    OR?: freequoteWhereInput[]
    NOT?: freequoteWhereInput | freequoteWhereInput[]
    id?: IntFilter<"freequote"> | number
    name?: StringFilter<"freequote"> | string
    email?: StringFilter<"freequote"> | string
    phone?: StringFilter<"freequote"> | string
    services?: StringFilter<"freequote"> | string
    date?: StringFilter<"freequote"> | string
    time?: StringFilter<"freequote"> | string
  }

  export type freequoteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    date?: SortOrder
    time?: SortOrder
    _relevance?: freequoteOrderByRelevanceInput
  }

  export type freequoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: freequoteWhereInput | freequoteWhereInput[]
    OR?: freequoteWhereInput[]
    NOT?: freequoteWhereInput | freequoteWhereInput[]
    name?: StringFilter<"freequote"> | string
    email?: StringFilter<"freequote"> | string
    phone?: StringFilter<"freequote"> | string
    services?: StringFilter<"freequote"> | string
    date?: StringFilter<"freequote"> | string
    time?: StringFilter<"freequote"> | string
  }, "id">

  export type freequoteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    date?: SortOrder
    time?: SortOrder
    _count?: freequoteCountOrderByAggregateInput
    _avg?: freequoteAvgOrderByAggregateInput
    _max?: freequoteMaxOrderByAggregateInput
    _min?: freequoteMinOrderByAggregateInput
    _sum?: freequoteSumOrderByAggregateInput
  }

  export type freequoteScalarWhereWithAggregatesInput = {
    AND?: freequoteScalarWhereWithAggregatesInput | freequoteScalarWhereWithAggregatesInput[]
    OR?: freequoteScalarWhereWithAggregatesInput[]
    NOT?: freequoteScalarWhereWithAggregatesInput | freequoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"freequote"> | number
    name?: StringWithAggregatesFilter<"freequote"> | string
    email?: StringWithAggregatesFilter<"freequote"> | string
    phone?: StringWithAggregatesFilter<"freequote"> | string
    services?: StringWithAggregatesFilter<"freequote"> | string
    date?: StringWithAggregatesFilter<"freequote"> | string
    time?: StringWithAggregatesFilter<"freequote"> | string
  }

  export type indexcontactWhereInput = {
    AND?: indexcontactWhereInput | indexcontactWhereInput[]
    OR?: indexcontactWhereInput[]
    NOT?: indexcontactWhereInput | indexcontactWhereInput[]
    id?: IntFilter<"indexcontact"> | number
    name?: StringFilter<"indexcontact"> | string
    email?: StringFilter<"indexcontact"> | string
    phone?: StringFilter<"indexcontact"> | string
    services?: StringFilter<"indexcontact"> | string
    comment?: StringFilter<"indexcontact"> | string
    date?: StringFilter<"indexcontact"> | string
    time?: StringFilter<"indexcontact"> | string
  }

  export type indexcontactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
    _relevance?: indexcontactOrderByRelevanceInput
  }

  export type indexcontactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: indexcontactWhereInput | indexcontactWhereInput[]
    OR?: indexcontactWhereInput[]
    NOT?: indexcontactWhereInput | indexcontactWhereInput[]
    name?: StringFilter<"indexcontact"> | string
    email?: StringFilter<"indexcontact"> | string
    phone?: StringFilter<"indexcontact"> | string
    services?: StringFilter<"indexcontact"> | string
    comment?: StringFilter<"indexcontact"> | string
    date?: StringFilter<"indexcontact"> | string
    time?: StringFilter<"indexcontact"> | string
  }, "id">

  export type indexcontactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
    _count?: indexcontactCountOrderByAggregateInput
    _avg?: indexcontactAvgOrderByAggregateInput
    _max?: indexcontactMaxOrderByAggregateInput
    _min?: indexcontactMinOrderByAggregateInput
    _sum?: indexcontactSumOrderByAggregateInput
  }

  export type indexcontactScalarWhereWithAggregatesInput = {
    AND?: indexcontactScalarWhereWithAggregatesInput | indexcontactScalarWhereWithAggregatesInput[]
    OR?: indexcontactScalarWhereWithAggregatesInput[]
    NOT?: indexcontactScalarWhereWithAggregatesInput | indexcontactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"indexcontact"> | number
    name?: StringWithAggregatesFilter<"indexcontact"> | string
    email?: StringWithAggregatesFilter<"indexcontact"> | string
    phone?: StringWithAggregatesFilter<"indexcontact"> | string
    services?: StringWithAggregatesFilter<"indexcontact"> | string
    comment?: StringWithAggregatesFilter<"indexcontact"> | string
    date?: StringWithAggregatesFilter<"indexcontact"> | string
    time?: StringWithAggregatesFilter<"indexcontact"> | string
  }

  export type LoginWhereInput = {
    AND?: LoginWhereInput | LoginWhereInput[]
    OR?: LoginWhereInput[]
    NOT?: LoginWhereInput | LoginWhereInput[]
    id?: IntFilter<"Login"> | number
    email?: StringFilter<"Login"> | string
    password?: StringFilter<"Login"> | string
  }

  export type LoginOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _relevance?: LoginOrderByRelevanceInput
  }

  export type LoginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: LoginWhereInput | LoginWhereInput[]
    OR?: LoginWhereInput[]
    NOT?: LoginWhereInput | LoginWhereInput[]
    password?: StringFilter<"Login"> | string
  }, "id" | "email">

  export type LoginOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: LoginCountOrderByAggregateInput
    _avg?: LoginAvgOrderByAggregateInput
    _max?: LoginMaxOrderByAggregateInput
    _min?: LoginMinOrderByAggregateInput
    _sum?: LoginSumOrderByAggregateInput
  }

  export type LoginScalarWhereWithAggregatesInput = {
    AND?: LoginScalarWhereWithAggregatesInput | LoginScalarWhereWithAggregatesInput[]
    OR?: LoginScalarWhereWithAggregatesInput[]
    NOT?: LoginScalarWhereWithAggregatesInput | LoginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Login"> | number
    email?: StringWithAggregatesFilter<"Login"> | string
    password?: StringWithAggregatesFilter<"Login"> | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    email?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    name?: StringNullableFilter<"AdminUser"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminUserOrderByRelevanceInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    name?: StringNullableFilter<"AdminUser"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"AdminUser"> | Date | string | null
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "email">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    email?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringNullableWithAggregatesFilter<"AdminUser"> | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"AdminUser"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: IntFilter<"Submission"> | number
    source?: EnumSubmissionSourceFilter<"Submission"> | $Enums.SubmissionSource
    name?: StringFilter<"Submission"> | string
    email?: StringFilter<"Submission"> | string
    phone?: StringFilter<"Submission"> | string
    services?: StringFilter<"Submission"> | string
    message?: StringNullableFilter<"Submission"> | string | null
    ip?: StringNullableFilter<"Submission"> | string | null
    read?: BoolFilter<"Submission"> | boolean
    createdAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    message?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _relevance?: SubmissionOrderByRelevanceInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    source?: EnumSubmissionSourceFilter<"Submission"> | $Enums.SubmissionSource
    name?: StringFilter<"Submission"> | string
    email?: StringFilter<"Submission"> | string
    phone?: StringFilter<"Submission"> | string
    services?: StringFilter<"Submission"> | string
    message?: StringNullableFilter<"Submission"> | string | null
    ip?: StringNullableFilter<"Submission"> | string | null
    read?: BoolFilter<"Submission"> | boolean
    createdAt?: DateTimeFilter<"Submission"> | Date | string
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    message?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Submission"> | number
    source?: EnumSubmissionSourceWithAggregatesFilter<"Submission"> | $Enums.SubmissionSource
    name?: StringWithAggregatesFilter<"Submission"> | string
    email?: StringWithAggregatesFilter<"Submission"> | string
    phone?: StringWithAggregatesFilter<"Submission"> | string
    services?: StringWithAggregatesFilter<"Submission"> | string
    message?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    ip?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    read?: BoolWithAggregatesFilter<"Submission"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type contactcontactCreateInput = {
    name: string
    email: string
    phone: string
    services: string
    comment: string
    date: string
    time: string
  }

  export type contactcontactUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    services: string
    comment: string
    date: string
    time: string
  }

  export type contactcontactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type contactcontactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type contactcontactCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    services: string
    comment: string
    date: string
    time: string
  }

  export type contactcontactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type contactcontactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type freequoteCreateInput = {
    name: string
    email: string
    phone: string
    services: string
    date: string
    time: string
  }

  export type freequoteUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    services: string
    date: string
    time: string
  }

  export type freequoteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type freequoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type freequoteCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    services: string
    date: string
    time: string
  }

  export type freequoteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type freequoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type indexcontactCreateInput = {
    name: string
    email: string
    phone: string
    services: string
    comment: string
    date: string
    time: string
  }

  export type indexcontactUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    services: string
    comment: string
    date: string
    time: string
  }

  export type indexcontactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type indexcontactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type indexcontactCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    services: string
    comment: string
    date: string
    time: string
  }

  export type indexcontactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type indexcontactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
  }

  export type LoginCreateInput = {
    email: string
    password: string
  }

  export type LoginUncheckedCreateInput = {
    id?: number
    email: string
    password: string
  }

  export type LoginUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LoginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LoginCreateManyInput = {
    id?: number
    email: string
    password: string
  }

  export type LoginUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type LoginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUserCreateInput = {
    email: string
    password: string
    name?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    source: $Enums.SubmissionSource
    name: string
    email: string
    phone: string
    services: string
    message?: string | null
    ip?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type SubmissionUncheckedCreateInput = {
    id?: number
    source: $Enums.SubmissionSource
    name: string
    email: string
    phone: string
    services: string
    message?: string | null
    ip?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    source?: EnumSubmissionSourceFieldUpdateOperationsInput | $Enums.SubmissionSource
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: EnumSubmissionSourceFieldUpdateOperationsInput | $Enums.SubmissionSource
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: number
    source: $Enums.SubmissionSource
    name: string
    email: string
    phone: string
    services: string
    message?: string | null
    ip?: string | null
    read?: boolean
    createdAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    source?: EnumSubmissionSourceFieldUpdateOperationsInput | $Enums.SubmissionSource
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    source?: EnumSubmissionSourceFieldUpdateOperationsInput | $Enums.SubmissionSource
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    services?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type contactcontactOrderByRelevanceInput = {
    fields: contactcontactOrderByRelevanceFieldEnum | contactcontactOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type contactcontactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type contactcontactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactcontactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type contactcontactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type contactcontactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type freequoteOrderByRelevanceInput = {
    fields: freequoteOrderByRelevanceFieldEnum | freequoteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type freequoteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type freequoteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type freequoteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type freequoteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type freequoteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type indexcontactOrderByRelevanceInput = {
    fields: indexcontactOrderByRelevanceFieldEnum | indexcontactOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type indexcontactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type indexcontactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type indexcontactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type indexcontactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    comment?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type indexcontactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LoginOrderByRelevanceInput = {
    fields: LoginOrderByRelevanceFieldEnum | LoginOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LoginCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type LoginAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LoginMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type LoginMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type LoginSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminUserOrderByRelevanceInput = {
    fields: AdminUserOrderByRelevanceFieldEnum | AdminUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSubmissionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionSource | EnumSubmissionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionSource[]
    notIn?: $Enums.SubmissionSource[]
    not?: NestedEnumSubmissionSourceFilter<$PrismaModel> | $Enums.SubmissionSource
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SubmissionOrderByRelevanceInput = {
    fields: SubmissionOrderByRelevanceFieldEnum | SubmissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    message?: SortOrder
    ip?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    message?: SortOrder
    ip?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    services?: SortOrder
    message?: SortOrder
    ip?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSubmissionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionSource | EnumSubmissionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionSource[]
    notIn?: $Enums.SubmissionSource[]
    not?: NestedEnumSubmissionSourceWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionSourceFilter<$PrismaModel>
    _max?: NestedEnumSubmissionSourceFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSubmissionSourceFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionSource
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSubmissionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionSource | EnumSubmissionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionSource[]
    notIn?: $Enums.SubmissionSource[]
    not?: NestedEnumSubmissionSourceFilter<$PrismaModel> | $Enums.SubmissionSource
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSubmissionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionSource | EnumSubmissionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionSource[]
    notIn?: $Enums.SubmissionSource[]
    not?: NestedEnumSubmissionSourceWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionSourceFilter<$PrismaModel>
    _max?: NestedEnumSubmissionSourceFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}