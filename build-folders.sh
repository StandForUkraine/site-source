for f in out/p/*.html; do
    # [[ $f =~ ^(.{9}) ]]
    # dir=${BASH_REMATCH[1]}
    filename=${f:0:256}
    dir="${filename%.*}"
    mkdir -p "$dir" && mv "$f" "$dir/index.html"
done
