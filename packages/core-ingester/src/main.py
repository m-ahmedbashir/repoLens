from __future__ import annotations

import argparse

from vectorizer import Vectorizer


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="repolens-ingest")
    parser.add_argument("path", help="Repository path to index")
    return parser


def main() -> None:
    parser = build_parser()
    args = parser.parse_args()
    vectorizer = Vectorizer()
    vectorizer.describe()
    print(f"Indexing scaffold is ready for: {args.path}")


if __name__ == "__main__":
    main()
