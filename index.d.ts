declare function MMKV(): any;

export default MMKV;

declare module MMKV {
  /**
 * Set a string value to storag for a given key.
 *
 * @param {String} key
 * @param {String} value
 *
 */
export async function setStringAsync(key:string,value:string): Promise<boolean>;
  /**
 * Get a string value for a given key.
 * @param {String} key
 */
export async function getStringAsync(key:string): Promise<string>;


 /**
 * Set a number value to storage for a given key.
 *
 * @param {String} key
 * @param {number} value
 *
 */
export async function setIntAsync(key:string,value:number):Promise<boolean>;

/**
 * Get a number value for a given key
 * @param {String} key
 */
export async function getIntAsync(key:string):Promise<number>;

/**
 * Set a boolean value to storag for a given key.
 *
 * @param {String} key
 * @param {boolean} value
 *
 */
export async function setBoolAsync(key:string, value:boolean):Promise<boolean>;

/**
 * Get a boolean value for a given key.
 * @param {String} key
 */
export async function getBoolAsync(key:string):Promise<boolean>;


/**
 * Set an Object to storage for a given key.
 *
 * @param {String} key
 * @param {Object} value
 *
 */

export async function setMapAsync(key:string,value:object): Promise<boolean>;
/**
 * Get an Object from storage for a given key.
 * @param {String} key
 */
export async function getMapAsync(key:string):Promise<object>;
/**
 * Set an array to the db.
 * @param {String} key
 * @param {Array} array
 */
export async function setArrayAsync(key:string,value:Array<*>): Promise<boolean>;
/**
 * get an array from the storage for give key.
 * @param {String} key
 */

export async function getArrayAsync(key:string):Promise<Array<*>>;
/**
 * Retrieve multiple Objects for a given array of keys. Currently will work only if data for all keys is an Object.
 * Arrays will also be returned but wrappen in a object.
 *
 * **Will not work if a key as a String value.**
 *
 * @param {Array} keys
 */
export async function getMultipleItemsAsync(keys:Array<string>):Promise<Array<object>>;

/**
 * Get all keys from storage.
 *
 */
export async function getKeysAsync():Promise<Array<string>>;


/**
 * Check if a key exists in storage.
 *
 * @param {String} key
 */
export async  function hasKeyAsync(key:string):Promise<boolean>;

/**
 * Clear the storage.
 *
 */
export async function clearStore():Promise;
/**
 * Remove an item from storage for a given key.
 *
 * @param {String} key
 */
export async function removeItem(key:string):Promise;


// NON ASYNC CALLS

   /**
 * Set a string value to storag for a given key.
 *
 * @param {String} key
 * @param {String} value
 * @param {Function} callback 
 */
export function setString(key:string,value:string,callback:Function): boolean;
/**
* Get a string value for a given key.
* @param {String} key
 * @param {Function} callback 
*/
export function getString(key:string,callback:Function):string;


/**
* Set a number value to storage for a given key.
*
* @param {String} key
* @param {number} value
 * @param {Function} callback 
*/
export function setInt(key:string,value:number,callback:Function):boolean;

/**
* Get a number value for a given key
* @param {String} key
 * @param {Function} callback 
*/
export function getInt(key:string,callback:Function):number;

/**
* Set a boolean value to storag for a given key.
*
* @param {String} key
* @param {boolean} value
 * @param {Function} callback 
*/
export function setBool(key:string, value:boolean,callback:Function):boolean;

/**
* Get a boolean value for a given key.
* @param {String} key
 * @param {Function} callback 
*/
export function getBool(key:string,callback:Function):boolean;


/**
* Set an Object to storage for a given key.
*
* @param {String} key
* @param {Object} value
 * @param {Function} callback 
*/

export function setMap(key:string,value:object,callback:Function): boolean;
/**
* Get an Object from storage for a given key.
* @param {String} key
 * @param {Function} callback 
*/
export function getMap(key:string,callback:Function):object;
/**
* Set an array to the db.
* @param {String} key
* @param {Array} array
 * @param {Function} callback 
*/
export function setArray(key:string,value:Array<*>,callback:Function): boolean;
/**
* get an array from the storage for give key.
* @param {String} key
 * @param {Function} callback 
*/

export function getArray(key:string,callback:Function):Array<*>;
/**
* Retrieve multiple Objects for a given array of keys. Currently will work only if data for all keys is an Object.
* Arrays will also be returned but wrappen in a object.
*
* **Will not work if a key as a String value.**
*
* @param {Array} keys
 * @param {Function} callback 
*/
export function getMultipleItems(keys:Array<string>,callback:Function):Array<object>;

/**
* Get all keys from storage.
 * @param {Function} callback 
*
*/
export function getKeys(callback:Function):Promise<Array<string>>;


/**
* Check if a key exists in storage.
*
* @param {String} key
 * @param {Function} callback 
*/
export function hasKey(key:string,callback:Function):boolean;

}