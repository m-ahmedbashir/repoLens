from setuptools import find_packages, setup

setup(
    name="repolens-core-ingester",
    version="0.1.0",
    package_dir={"": "src"},
    packages=find_packages(where="src"),
    py_modules=["main", "vectorizer"],
    install_requires=[
        "langchain-text-splitters",
        "psycopg2-binary",
    ],
)
