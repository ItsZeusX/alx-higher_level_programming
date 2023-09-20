#!/usr/bin/python3
"""
Script that lists all states with a name starting with N (upper N) from the
database hbtn_0e_0_usa:

Args:
    db_user (str): Database user name
    db_passwd (str): Database user password
    db_name (str): Database user password
"""
import MySQLdb
import sys


if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: {} username password database_name".format(sys.argv[0]))
        exit(1)

    db_user = sys.argv[1]
    db_passwd = sys.argv[2]
    db_name = sys.argv[3]

    conn = MySQLdb.connect(host="localhost", port=3306, user=db_user,
                           passwd=db_passwd, db=db_name)
    cur = conn.cursor()
    cur.execute("SELECT * \
                 FROM states \
                 WHERE name LIKE BINARY 'N%' \
                 ORDER BY id ASC")

    query_rows = cur.fetchall()
    for row in query_rows:
        print(row)
