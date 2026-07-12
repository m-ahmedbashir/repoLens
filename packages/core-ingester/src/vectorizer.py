from __future__ import annotations

from dataclasses import dataclass


@dataclass(slots=True)
class Vectorizer:
    model: str = "placeholder-embedding-model"

    def describe(self) -> str:
        return self.model
