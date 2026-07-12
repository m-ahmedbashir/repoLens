from main import build_parser


def test_parser_requires_a_path_argument():
    parser = build_parser()
    args = parser.parse_args(["some/repo/path"])
    assert args.path == "some/repo/path"


def test_parser_rejects_missing_path_argument():
    parser = build_parser()
    try:
        parser.parse_args([])
        assert False, "expected argparse to reject a missing path argument"
    except SystemExit:
        pass
