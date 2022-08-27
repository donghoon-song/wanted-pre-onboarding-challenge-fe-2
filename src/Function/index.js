/**
 * 할 일을 추가할 수  있다.
 * 내용없이 추가할 수  없다.
 * 
 * @function
 * @name create
 * @param {string} content - 할일 내용
 */

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * 
 * @function
 * @name read
 * @param {number} [id] - 할일 id
 */

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * 
 * @type {import("../Model/tag").Tag} Tag
 * 
 * @function
 * @name update
 * @param {number} id - 할일 id
 * @param {Object} payload
 * @param {string} [payload.content] - 할일 내용
 * @param {boolean} [payload.completed] - 할일 완료 여부
 * @param {string} [payload.category] - 카테고리
 * @param {Tag} [payload.tag] - 태그
 */

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * 
 * @type {import('../Model/tag').Tag} Tag
 * 
 * @function
 * @name delete
 * @param {number} [id] - 할일 id
 * @param {Object} payload
 * @param {Tag.id[]} [payload.tagIds] - 태그 id들
 */