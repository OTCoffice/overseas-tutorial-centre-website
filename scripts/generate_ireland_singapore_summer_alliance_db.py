from __future__ import annotations

import csv
import json
import sqlite3
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "reports" / "OTC_Ireland_Singapore_Summer_Alliance_Web_Research_2026-05-29.csv"
OUT_DIR = ROOT / "reports" / "db"
JSON_OUT = OUT_DIR / "otc_ireland_singapore_summer_alliance_2026-05-29.json"
SQLITE_OUT = OUT_DIR / "otc_ireland_singapore_summer_alliance_2026-05-29.sqlite"


def load_rows() -> list[dict[str, str]]:
    with SOURCE.open("r", encoding="utf-8", newline="") as handle:
        return list(csv.DictReader(handle))


def write_json(rows: list[dict[str, str]]) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    payload = {
        "dataset": "OTC Ireland and Singapore Summer Alliance web research",
        "date": "2026-05-29",
        "records": rows,
    }
    JSON_OUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def write_sqlite(rows: list[dict[str, str]]) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if SQLITE_OUT.exists():
        SQLITE_OUT.unlink()

    columns = list(rows[0].keys()) if rows else []
    with sqlite3.connect(SQLITE_OUT) as conn:
        conn.execute(
            """
            CREATE TABLE summer_alliance_candidates (
                region TEXT,
                provider TEXT,
                official_url TEXT,
                city_or_campus TEXT,
                age_range TEXT,
                programme_type TEXT,
                residential_or_day TEXT,
                dates_2026_or_next_available TEXT,
                fee_public_or_tbc TEXT,
                English_requirement TEXT,
                application_route TEXT,
                why_fit_chinese_families TEXT,
                risk_or_unknown TEXT,
                PRIMARY KEY (region, provider)
            )
            """
        )
        placeholders = ", ".join("?" for _ in columns)
        conn.executemany(
            f"INSERT INTO summer_alliance_candidates ({', '.join(columns)}) VALUES ({placeholders})",
            [[row[column] for column in columns] for row in rows],
        )
        conn.commit()


def main() -> None:
    rows = load_rows()
    write_json(rows)
    write_sqlite(rows)
    print(f"Wrote {JSON_OUT}")
    print(f"Wrote {SQLITE_OUT}")


if __name__ == "__main__":
    main()
