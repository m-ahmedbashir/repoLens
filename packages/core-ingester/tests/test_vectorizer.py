from vectorizer import Vectorizer


def test_default_model_is_the_placeholder():
    vectorizer = Vectorizer()
    assert vectorizer.describe() == "placeholder-embedding-model"


def test_describe_reflects_a_custom_model():
    vectorizer = Vectorizer(model="custom-embedding-model")
    assert vectorizer.describe() == "custom-embedding-model"
