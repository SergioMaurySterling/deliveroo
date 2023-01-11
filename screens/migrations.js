/* eslint no-unused-vars: 0 */

'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function (db) {
  const sort_id = 10;
  const results = await db.runSql("SELECT * FROM unions WHERE slug = 'deltamec'");
  const deltaUnionId = results.rows[0].id;

  await db.runSql(`
    INSERT INTO inquiry_categories (name, is_top_level, hidden, icon, sort_id, warning_text, is_new_until, union_id)
      VALUES ('Tentative Agreement', true, false, 'TentativeAgreement',${sort_id}, 'Limited time', '2023-12-31', ${deltaUnionId})
  `);

  await db.runSql(`
    UPDATE feature_flag
    SET is_inactive = FALSE
    WHERE feature_name = 'DELTA_TA' AND type = 'UNION';
  `);
  return null;
};

exports.down = async function (db) {
  await db.runSql("DELETE FROM inquiry_categories WHERE name = 'Tentative Agreement'");
  await db.runSql(`
    UPDATE feature_flag
    SET is_inactive = FALSE
    WHERE feature_name = 'DELTA_TA' AND type = 'UNION';
  `);
  return null;
};

exports._meta = {
  version: 1,
};